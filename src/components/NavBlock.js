import React from 'react';
import UserSummary from './UserSummary';
import ChecklistsBlock from './ChecklistsBlock';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        backgroundColor: '#607D8B',
        minHeight: '100vh'
    }
});

class NavBlock extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <UserSummary user={this.props.user} />
                <Divider />
                <ChecklistsBlock checklists={this.props.checklists}/>
            </div>
        );
    }
}

export default withStyles(styles)(NavBlock);
