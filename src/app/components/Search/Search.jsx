import {TextField} from "@material-ui/core";

const Search = (props) => {
    const {className, onChange} = props
    return (
        <TextField
            label={'Search'}
            type={'search'}
            className={className}
            onChange={onChange}
        />

    );
};

export default Search;