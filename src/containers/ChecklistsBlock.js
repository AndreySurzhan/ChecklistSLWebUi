import React from 'react';
import AddNewElement from '../common/components/AddNewElement';
import Checklist from '../components/Checklist';
import List from '@material-ui/core/List';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    checklist: {
        paddingLeft: theme.spacing.unit * 2
    }
});

class ChecklistsBlock extends React.Component {
    addNewChecklistElementProps = {
        id: 'cssl-add-new-checklist-text-input',
        name: 'newChecklistInput',
        placeholder: 'Type in New Checklist Name',
        lable: 'Add New Checklist'
    }

    render() {
        const { classes } = this.props;

        return (
            <div id='cl-checklists-container'>
                <AddNewElement element={this.addNewChecklistElementProps}/>
                <List className={classes.checklist} >
                    {this.props.checklists.map((checklist, i) => (
                        <Checklist key={i} checklist={checklist}></Checklist>
                    ))}
                </List>
            </div>
        )
    }
}

export default withStyles(styles)(ChecklistsBlock);