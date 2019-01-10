import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import MoreButton from './MoreButton';

class Checklist extends React.Component {
    render() {
        return (
            <div>
                <Paper elevation={1}>
                    <Typography variant='h5' component='h3'>
                        {this.props.checklist.name}
                    </Typography>
                </Paper>
                <MoreButton />
            </div>
        );
    }
}

export default Checklist;
