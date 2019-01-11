import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';

class Translation extends React.Component {
    render() {
        return (
            <div>
                <ListItem>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary={this.props.translation.language} />
                    <ListItemText primary={this.props.translation.translation} />
                </ListItem>
            </div>
        );
    }
}

export default Translation;
