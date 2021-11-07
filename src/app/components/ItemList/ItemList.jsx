import React from 'react';
import {List, Typography} from "@material-ui/core";
import Item from "../Item/Item";

const ItemList = (props) => {
    const {className, data} = props

    const items = data ? data.map(el => <Item key={el.id} text={el.value}/>) : []

    return (
        <List className={className}>
            {items.length ?
                items
                :
                <Typography variant="h5" component="h3">
                    No items found
                </Typography>
            }
        </List>
    );
};

export default ItemList;