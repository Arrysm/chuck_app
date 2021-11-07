import {FormControl, InputLabel, Select} from "@material-ui/core";

const CategoryList = (props) => {
    const {className, onChange, categories} = props

    const options = [<option key={'random'} value="random">random</option>]

    const items = [...options,categories.map(el => <option key={el.toString()} value={el}>{el}</option>)]

    return (
        <FormControl className={className} >
            <InputLabel htmlFor="category">Category</InputLabel>
                <Select
                    native
                    onChange={onChange}
                    inputProps={{
                        name: 'category',
                        id: 'category',
                    }}
            >
                    {items}
            </Select>
        </FormControl>
    );
};

export default CategoryList;