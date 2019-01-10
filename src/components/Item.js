import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import MoreButton from './MoreButton';

class Item extends React.Component {
    render() {
        return (
            <div>
                <Checkbox checked={this.props.item.checked}/>

                <Paper elevation={1}>
                    <Typography variant="h5" component="h3">
                        {this.props.item.text}
                    </Typography>

                    <MoreButton />

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
                </Paper>
            </div>
        );
    }
}

export default Item;
