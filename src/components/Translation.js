import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FlagIconFactory from 'react-flag-icon-css';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        padding: 0,
        paddingButtom: theme.spacing.unit / 4,
        paddingTop: theme.spacing.unit / 4
    },
    listItemText: {
        paddingLeft: 0
    }
});

const FlagIcon = FlagIconFactory(React, { useCssModules: false }) 

class Translation extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <ListItem className={classes.root}>
                <ListItemIcon>
                    <FlagIcon code={this.props.translation.language} />
                </ListItemIcon>
                <ListItemText
                    className={classes.listItemText}
                    secondary={this.props.translation.translation}
                />
            </ListItem>
        );
    }
}

export default withStyles(styles)(Translation);
