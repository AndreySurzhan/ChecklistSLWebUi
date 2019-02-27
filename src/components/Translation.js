import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import FlagIconFactory from "react-flag-icon-css";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
    root: {
        padding: 0,
        paddingButtom: theme.spacing.unit / 4,
        paddingTop: theme.spacing.unit / 4
    },
    listItemText: {
        paddingLeft: 0
    }
});

const FlagIcon = FlagIconFactory(React, { useCssModules: false });

const Translation = ({ classes, translation }) => {
    return (
        <ListItem className={classes.root}>
            <ListItemIcon>
                <FlagIcon code={translation.language} />
            </ListItemIcon>
            <ListItemText
                className={classes.listItemText}
                secondary={translation.translation}
            />
        </ListItem>
    );
};

export default withStyles(styles)(Translation);
