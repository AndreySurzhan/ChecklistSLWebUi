import React from 'react';
import NavBlock from '../containers/NavBlock';
import ItemsBlock from '../containers/ItemsBlock';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import avatarImage from '../images/avatar.jpg';

const styles = theme => ({
    root: {
        minHeight: '100vh'
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
            <Grid id="clsl-checklist-container" container direction="row" spacing={0} className={classes.root}>
                <Grid item xs={3}>
                    <NavBlock user={this.user} checklists={this.checklists} />
                </Grid>
                <Grid item xs={9}>
                    <ItemsBlock items={this.items} />
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(ChecklistPage);
