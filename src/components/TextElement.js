import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

class TextElement extends React.Component {
    render() {
        return (
            <div style={{display: 'inline-block', width: '100%'}}>
                <Paper elevation={1}>
                    <Typography variant='h5' component='h3' style={{margin: '0 10px 0 10px'}}>
                        {this.props.element.text || this.props.element.name}
                    </Typography>
                    {this.props.children}
                </Paper>
            </div>
        );
    }
}

export default TextElement;
