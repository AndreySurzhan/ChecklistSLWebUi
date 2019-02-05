import React from 'react';
import NavBlock from './NavBlock';
import ItemsBlock from './ItemsBlock';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import avatarImage from '../images/avatar.jpg';

const styles = theme => ({
    root: {
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
        },
        {
            checked: false,
            text: `test checklist name 2 checklist name checklist 
            name checklist name checklist name checklist name checklist
             name checklist name checklist name checklist name checklist name 
             checklist name checklist name checklist name checklist name 
             checklist name checklist name checklist name `,
            translations: [
                {
                    language: 'us',
                    translation: `test checklist name 2 checklist name checklist 
                    name checklist name checklist name checklist name checklist
                     name checklist name checklist name checklist name checklist name 
                     checklist name checklist name checklist name checklist name 
                     checklist name checklist name checklist name `
                },
                {
                    language: 'es',
                    translation: 'le milk'
                },
                {
                    language: 'ge',
                    translation: 'milk'
                }
            ]
        }
    ];

    checklists = [
        {
            name: 'test checklist name'
        },
        {
            name: 'test checklist name 2'
        },
        {
            name: 'test checklist name 3hecklist namhecklist namhecklist namhecklist namhecklist nam'
        }
    ];

    user = {
        username: 'Sponge Bob Round Panties',
        avatar: avatarImage
    };

    render() {
        const { classes } = this.props;

        return (
            <Grid container direction="row" spacing={0} className={classes.root}>
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

export default withStyles(styles)(App);
