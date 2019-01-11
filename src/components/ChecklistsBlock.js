import React from 'react';
import AddNewElement from './AddNewElement';
import Checklist from './Checklist';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';

class ChecklistsBlock extends React.Component {
    addNewChecklistElementProps = {
        id: 'cssl-add-new-checklist-text-input',
        name: 'newChecklistInput',
        placeholder: 'Type in New Checklist Name',
        lable: 'Add New Checklist'
    }

    render() {
        return (
            <div id='cl-checklists-container'>
                <AddNewElement element={this.addNewChecklistElementProps}/>
                <Divider />
                <List>
                    {this.props.checklists.map((checklist, i) => (
                        <Checklist key={i} checklist={checklist}></Checklist>
                    ))}
                </List>
            </div>
        )
    }
}

export default ChecklistsBlock;