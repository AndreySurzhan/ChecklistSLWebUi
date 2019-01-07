import React from 'react';
import NavBlock from '../NavBlock/NavBlock';
import ItemsBlock from '../ItemsBlock/ItemsBlock';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import './App.css'

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <div>
                    <Grid container spacing={24}>
                        <Grid item xs={4}>
                            <NavBlock className='clsl-block'/>
                        </Grid>
                        <Grid item xs={8}>
                            <ItemsBlock className='clsl-block'/>
                        </Grid>
                    </Grid>
                </div>
            </React.Fragment>
        );
    }
}

export default App;
