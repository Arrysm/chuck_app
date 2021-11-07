import axios from "axios";

export const GET_RANDOM_JOKE = 'GET_RANDOM_JOKE'
export const GET_RANDOM_CATEGORY_JOKE = 'GET_RANDOM_CATEGORY_JOKE'
export const GET_JOKE_BY_TEXT = 'GET_JOKE_BY_TEXT'

export const START_LOADING = 'START_LOADING'
export const END_LOADING = 'END_LOADING'

export const getRandomJoke = () => dispatch => {
    dispatch(startLoading())
    axios.get('/random')
        .then(resp => {
            dispatch(endLoading())
            const {data} = resp
            dispatch({
                type: GET_RANDOM_JOKE,
                payload: [data]
            })
        })
        .catch(() => {
            dispatch(endLoading())
            dispatch({
                type: GET_RANDOM_JOKE,
                payload: []
            })
        })
}

export const getRandomCategoryJoke = (category) => dispatch => {
    dispatch(startLoading())
    axios.get(`/random?category=${category}`)
        .then(resp => {
            dispatch(endLoading())
            const {data} = resp
            dispatch({
                type: GET_RANDOM_CATEGORY_JOKE,
                payload: [data]
            })
        })
        .catch(() => {
            dispatch(endLoading())
            dispatch({
                type: GET_RANDOM_CATEGORY_JOKE,
                payload: []
            })
        })
}

export const getSearchValue = (value) => dispatch => {
    dispatch(startLoading())
    axios.get(`/search?query=${value}`)
        .then(resp => {
            dispatch(endLoading())
            const {data} = resp
            if (data.total > 5) {
                const result = []
                for (let i = 0; i <= 5; i++) result.push(data.result[i])
                dispatch({
                    type: GET_JOKE_BY_TEXT,
                    payload: result
                })
            }
            else if (data.total > 0 && data.total <= 5) {
                const result = []
                for (let i = 0; i < data.total; i++) result.push(data.result[i])
                dispatch({
                    type: GET_JOKE_BY_TEXT,
                    payload: result
                })
            }
            else dispatch({
                type: GET_JOKE_BY_TEXT,
                payload: []
            })

        })
        .catch(() => {
            dispatch(endLoading())
            dispatch({
                type: GET_JOKE_BY_TEXT,
                payload: []
            })
        })
}


//---------------------------------------------------------

export const startLoading = () => dispatch => dispatch({
    type: START_LOADING,
    payload: true
})

export const endLoading = () => dispatch => dispatch({
    type: END_LOADING,
    payload: false
})
