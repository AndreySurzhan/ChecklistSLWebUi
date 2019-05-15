import React from 'react';
import List from '@material-ui/core/List';
import Item from '../containers/Item';
import { withStyles } from '@material-ui/core/styles';
import { ListItem } from '@material-ui/core';
import { PropTypes } from 'prop-types';

const borderStyle = '1px solid rgba(0,0,0,.125)';
const styles = theme => ({
    root: {
        width: '100%',
        padding: 0
    },
    listItem: {
        padding: 0,
        borderBottom: borderStyle,
        '&:last-child': {
            borderBottom: 'none'
        },
        '&:first-child': {
            borderTop: borderStyle
        }
    }
});

const ItemsList = ({ classes, items }) => {
    return (
        <List className={classes.root}>
            {items.map((item, i) => (
                <ListItem key={i} className={classes.listItem}>
                    <Item item={item} />
                </ListItem>
            ))}
        </List>
    );
};

ItemsList.propTypes = {
    classes: PropTypes.object.isRequired,
    items: PropTypes.array.isRequired
};

export default withStyles(styles)(ItemsList);
