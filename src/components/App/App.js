import React from 'react';
import NavBlock from '../NavBlock';
import ItemsBlock from '../ItemsBlock';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import './App.css';

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

    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <Grid container spacing={8} style={{'minHeight': '100vh'}}>
                    <Grid item direction='column'  xs={4}>
                        <NavBlock checklists={this.checklists} className='clsl-block' />
                    </Grid>
                    <Grid item direction='column' xs={8}>
                        <ItemsBlock items={this.items} className='clsl-block' />
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

export default App;
