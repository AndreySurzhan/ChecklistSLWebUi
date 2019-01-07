import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class AddNewItemBlock extends React.Component {
    state = {
        text: 'Cat in the Item'
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
                    id="cssl-add-new-item-text"
                    label="Add New Item"
                    value={this.state.text}
                    onChange={this.handleChange('text')}
                    margin="normal"
                />
            </div>
        );
    }
}

export default AddNewItemBlock;
