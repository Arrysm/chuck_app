import {Button} from "@material-ui/core";

const Btn = (props) => {
    const {onClick, text, className} = props

    return (
        <Button
            variant="contained"
            color="primary"
            onClick={onClick}
            className={className}
        >
            {text}
        </Button>
    );
};

export default Btn;