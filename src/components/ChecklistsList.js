import React from 'react';
import List from '@material-ui/core/List';
import ChecklistItem from './ChecklistItem';
import { withStyles } from '@material-ui/core/styles';
import { ListItem } from '@material-ui/core';

const styles = theme => ({
    root: {
        paddingLeft: theme.spacing.unit * 2
    },
    checklistItem: {
        padding: 0,
        width: '100%',
        marginTop: theme.spacing.unit / 2,
        marginBottom: theme.spacing.unit
    }
});

class ChecklistsList extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <List className={classes.root}>
                {this.props.checklists.map((checklist, i) => (
                    <ListItem key={i} className={classes.checklistItem}>
                        <ChecklistItem checklist={checklist}/>
                    </ListItem>
                ))}
            </List>
        );
    }
}

export default withStyles(styles)(ChecklistsList);
