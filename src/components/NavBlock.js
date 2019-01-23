import React from 'react';
import UserSummary from './UserSummary';
import ChecklistsBlock from './ChecklistsBlock';
import Divider from '@material-ui/core/Divider';

class NavBlock extends React.Component {
    render() {
        return (
            <div className={this.props.className}>
                <UserSummary user={this.props.user} />
                <Divider />
                <ChecklistsBlock checklists={this.props.checklists}/>
            </div>
        );
    }
}

export default NavBlock;
