import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


class AddNewElement extends React.Component {
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
                <Button variant='contained' color='primary'>
                    +
                </Button>
                <TextField
                    id={this.props.element.id}
                    label={this.props.element.lable}
                    name={this.props.element.name}
                    type='text'
                    placeholder={this.props.element.placeholder}
                    value={this.state.name}
                    onChange={this.handleChange('name')}
                    margin='normal'
                    fullWidth={true}
                />
            </form>
        );
    }
}

export default AddNewElement;
