import React from 'react';
import NavBlock from '../NavBlock';
import ItemsBlock from '../ItemsBlock';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import './App.css';
import avatarImage from '../../images/avatar.jpg';

const styles = theme => ({
    root: {
        backgroundColor: '#BDBDBD',
        minHeight: '100vh'
    }
});

class App extends React.Component {
    items = [
        {
            checked: true,
            text: 'test checklist name',
            translations: [
                {
                    language: 'ru',
                    translation: 'молоко'
                }
            ]
        }
    ];

    checklists = [
        {
            name: 'test checklist name'
        }
    ];

    user = {
        username: 'Sponge Bob Round Panties',
        avatar: avatarImage
    };

    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <CssBaseline />
                <Grid container direction='row' spacing={0} className={classes.root}>
                    <Grid item xs={3}>
                        <NavBlock user={this.user} checklists={this.checklists}/>
                    </Grid>
                    <Grid item xs={9}>
                        <ItemsBlock items={this.items}/>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(App);
