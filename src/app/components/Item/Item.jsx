import React from 'react';
import {ListItem, Paper, Typography, withStyles} from "@material-ui/core";
import styles from "../../utils/styles";

const Item = (props) => {
    const {text, classes} = props

    return (
        <ListItem>
            <Paper className={classes.item}>
                <Typography variant="h5" component="h3">
                    {text}
                </Typography>
            </Paper>
         </ListItem>
    );
};

export default  withStyles(styles)(Item);