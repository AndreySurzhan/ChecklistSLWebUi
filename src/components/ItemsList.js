import React from "react";
import List from "@material-ui/core/List";
import Item from "./Item";
import { withStyles } from "@material-ui/core/styles";
import { ListItem } from "@material-ui/core";

const styles = theme => ({
    listItem: {
        padding: 0,
        width: "100%",
        marginTop: theme.spacing.unit / 2,
        marginBottom: theme.spacing.unit
    }
});

class ItemsList extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <List>
                {this.props.items.map((item, i) => (
                    <ListItem key={i} className={classes.listItem}>
                        <Item item={item} />
                    </ListItem>
                ))}
            </List>
        );
    }
}

export default withStyles(styles)(ItemsList);
