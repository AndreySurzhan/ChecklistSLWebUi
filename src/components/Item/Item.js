import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class Item extends Component {
    render() {
        return (
            <div>
                <Checkbox checked={this.props.checked} />

                <div>{/* Text */}</div>

                <Divider light />

                <List>
                    <ListItem>
                        <ListItemIcon>
                            {/* Flag icon */}
                        </ListItemIcon>
                        <ListItemText primary="Translation" />
                    </ListItem>
                </List>

                <div />
            </div>
        );
    }
}

export default Item;
