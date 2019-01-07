import React from 'react';
import Button from '@material-ui/core/Button';

class Checklist extends React.Component {
    render() {
        return (
            <div>
                <Button variant="contained" color="primary">
                    {this.props.checklist.name}
                </Button>
            </div>
        );
    }
}

export default Checklist;
