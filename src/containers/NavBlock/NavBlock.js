import React from 'react';
import UserSummary from '../../components/UserSummary/UserSummary';
import ChecklistsBlock from '../ChecklistsBlock/ChecklistBlock';

class NavBlock extends React.Component {
    user = {
        username: 'test@test.com',
        img: 'test.png'
    };

    render() {
        return (
            <div className={this.props.className}>
                <UserSummary user={this.user} />
                <ChecklistsBlock />
            </div>
        );
    }
}

export default NavBlock;
