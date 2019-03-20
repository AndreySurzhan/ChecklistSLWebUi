import React from "react";
import List from "@material-ui/core/List";
import Item from "../containers/Item";
import { withStyles } from "@material-ui/core/styles";
import { ListItem } from "@material-ui/core";
import { PropTypes } from 'prop-types';

const styles = theme => ({
    listItem: {
        padding: 0,
        width: "100%",
        marginTop: theme.spacing.unit / 2,
        marginBottom: theme.spacing.unit
    }
});

const ItemsList = ({ classes, items }) => {
    return (
        <List>
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
