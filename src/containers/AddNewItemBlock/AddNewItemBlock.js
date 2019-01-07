import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class AddNewItemBlock extends React.Component {
    state = {
        text: null
    };

    handleChange = text => event => {
        this.setState({
            [text]: event.target.value
        });
    };

    render() {
        return (
            <div>
                <Button variant="contained" color="primary">
                    +
                </Button>
                <TextField
                    id="cssl-add-new-item-text-input"
                    label="Add New Item"
                    value={this.state.text}
                    type='text'
                    placeholder='Type New Item Text'
                    onChange={this.handleChange('text')}
                    margin="normal"
                    fullWidth={true}
                />
            </div>
        );
    }
}

export default AddNewItemBlock;
