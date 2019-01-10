import React from 'react';
import AddNewChecklist from './AddNewChecklist';
import Checklist from './Checklist';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';

class ChecklistsBlock extends React.Component {
    render() {
        return (
            <div>
                <AddNewChecklist />
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