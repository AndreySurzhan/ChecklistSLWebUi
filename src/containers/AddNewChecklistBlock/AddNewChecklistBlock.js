import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class AddNewChecklistBlock extends React.Component {

    state = {
        name: 'Cat in the Hat'
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        });
    };

    render() {
        return (
            <div>
                <Button variant="contained" color="primary">
                    +
                </Button>
                <TextField
                    id="cssl-add-new-checklist-text"
                    label="Add New Checklist"
                    value={this.state.name}
                    onChange={this.handleChange('name')}
                    margin="normal"
                />
            </div>
        );
    }
}

export default AddNewChecklistBlock;
