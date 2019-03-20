import React from "react";
import List from "@material-ui/core/List";
import ChecklistItem from "../containers/ChecklistItem";
import { withStyles } from "@material-ui/core/styles";
import { ListItem } from "@material-ui/core";
import { PropTypes } from 'prop-types';

const styles = theme => ({
    root: {
        paddingLeft: theme.spacing.unit * 2
    },
    checklistItem: {
        padding: 0,
        width: "100%",
        marginTop: theme.spacing.unit / 2,
        marginBottom: theme.spacing.unit
    }
});

const ChecklistsList = ({ classes, checklists }) => {
    return (
        <List className={classes.root}>
            {checklists.map((checklist, i) => (
                <ListItem  key={i} className={classes.checklistItem}>
                    <ChecklistItem checklist={checklist} />
                </ListItem>
            ))}
        </List>
    );
};

ChecklistsList.propTypes = {
    classes: PropTypes.object.isRequired,
    checklists: PropTypes.array.isRequired
};

export default withStyles(styles)(ChecklistsList);
