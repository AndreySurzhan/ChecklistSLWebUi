import React from 'react';
import ItemsBlock from '../containers/ItemsBlock';
import Grid from '@material-ui/core/Grid';
import UserSummary from '../components/UserSummary';
import ChecklistsBlock from '../containers/ChecklistsBlock';
import { withStyles } from '@material-ui/core/styles';
import avatarImage from '../images/avatar.jpg';

const styles = theme => ({
    root: {
        minHeight: '100vh'
    },
    nav: {
        backgroundColor: '#607D8B'
    }
});

class ChecklistPage extends React.Component {
    user = {
        username: 'Sponge Bob Round Panties',
        avatar: avatarImage
    };

    render() {
        const { classes } = this.props;

        return (
            <Grid id="clsl-checklist-page-container" container direction="row" spacing={0} className={classes.root}>
                <Grid id="clsl-nav-container" item xs={3} className={classes.nav}>
                    <UserSummary id="clsl-user-summary-container" user={this.user} />
                    <ChecklistsBlock id="clsl-checklists-block-container"/>
                </Grid>
                <Grid id="clsl-items-container" item xs={9}>
                    <ItemsBlock id="clsl-items-block-container" items={this.items} />
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(ChecklistPage);
