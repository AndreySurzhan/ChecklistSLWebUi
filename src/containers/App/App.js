import React from 'react';
import NavBlock from '../NavBlock/NavBlock';
import ItemsBlock from '../ItemsBlock/ItemsBlock';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import './App.css'

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
                <div>
                    <Grid container spacing={24}>
                        <Grid item xs={4}>
                            <NavBlock checklists={this.checklists} className='clsl-block'/>
                        </Grid>
                        <Grid item xs={8}>
                            <ItemsBlock items={this.items} className='clsl-block'/>
                        </Grid>
                    </Grid>
                </div>
            </React.Fragment>
        );
    }
}

export default App;
