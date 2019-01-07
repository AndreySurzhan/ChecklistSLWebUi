import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class AddNewChecklistBlock extends React.Component {

    state = {
        name: null
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        });
    };

    render() {
        return (
            <form>
                <Button variant="contained" color="primary">
                    +
                </Button>
                <TextField
                    id="cssl-add-new-checklist-text-input"
                    label="Add New Checklist"
                    name='newChecklistInput'
                    type='text'
                    placeholder='Type New Checklist Name'
                    value={this.state.name}
                    onChange={this.handleChange('name')}
                    margin="normal"
                    fullWidth={true}
                />
            </form>
        );
    }
}

export default AddNewChecklistBlock;
