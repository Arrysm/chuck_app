import React, {useEffect, useState} from 'react';
import {Box, Container, Divider, Typography, withStyles} from "@material-ui/core";
import Search from "../Search/Search";
import styles from "../../utils/styles";
import CategoryList from "../CategoryList/CategoryList";
import axios from "axios";
import Btn from "../Btn/Button";
import ItemList from "../ItemList/ItemList";
import {useDispatch, useSelector} from "react-redux";
import {getRandomCategoryJoke, getRandomJoke, getSearchValue} from "../../store/actions";

const Main = (props) => {
    const {classes} = props
    const jokes = useSelector(store => store.jokes)
    const loading = useSelector(store => store.loading)
    const dispatch = useDispatch()

    const [options, setOptions] = useState([])

    const categoryHandler = e => {
        if (e.target.value === 'random') dispatch(getRandomJoke())
        else dispatch(getRandomCategoryJoke(e.target.value))
    }

    const getRandomHandler = () => {
        dispatch(getRandomJoke())
    }

    const getSearchHandler = (e) => {
        const value = e.target.value.trim()
        if (value !== '') {
            dispatch(getSearchValue(value))
        } else dispatch(getRandomJoke())
    }

    useEffect(() => {
        axios.get('/categories')
            .then(resp => {
                const {status, data} = resp
                if (status) {
                    setOptions(data)
                }
            })
        dispatch(getRandomJoke())
    }, [dispatch])

    return (
        <Container className={classes.main}>
            <Box className={classes.image}/>
            <Search
                className={classes.search}
                onChange={e => getSearchHandler(e)}
            />
            <CategoryList
                className={classes.select}
                onChange={e => categoryHandler(e)}
                categories={options}
            />
            <Btn
                text={'Get random joke'}
                className={classes.btn}
                onClick={getRandomHandler}
            />
            <Divider className={classes.divider}/>
            {
                loading ?
                    <Typography variant="h5" component="h3">
                        is loading...
                    </Typography>
                    :
                    <ItemList
                        className={classes.itemlist}
                        data={jokes}
                    />
            }
        </Container>
    );
};

export default withStyles(styles)(Main);