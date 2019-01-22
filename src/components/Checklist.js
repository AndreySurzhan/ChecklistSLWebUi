import React from 'react';
import TextElement from './TextElement';
import MoreButton from './MoreButton';
import { Grid } from '@material-ui/core';

class Checklist extends React.Component {
    render() {
        return (
            <div>                
                <Grid container direction='row' alignContent='center' alignItems='center' justify='center'>
                    <Grid item xs={10}>
                        <TextElement element={this.props.checklist} />
                    </Grid>
                    <MoreButton />
                </Grid>
            </div>
        );
    }
}

export default Checklist;
