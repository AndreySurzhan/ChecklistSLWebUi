import React from 'react';
import UserSummary from '../../components/UserSummary/UserSummary';
import ChecklistsBlock from '../ChecklistsBlock/ChecklistBlock';

class NavBlock extends React.Component {
    render() {
        return (
            <div className={this.props.className}>
                <UserSummary user={this.props.user} />
                <ChecklistsBlock checklists={this.props.checklists}/>
            </div>
        );
    }
}

export default NavBlock;