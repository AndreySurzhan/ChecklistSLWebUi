import React from 'react';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';

class Item extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <Checkbox checked={this.props.item.checked} />

                <Button variant="contained">{this.props.item.text}</Button>

                <Divider light />

                <List>
                    {this.props.item.translations.map((translation, i) => (
                        <ListItem key={i}>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary={translation.language} />
                            <ListItemText primary={translation.translation} />
                        </ListItem>
                    ))}
                </List>

                <div />
            </div>
        );
    }
}

export default Item;
