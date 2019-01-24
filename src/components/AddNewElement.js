import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        display: 'inline-flex',
        width: '100%'
    },
    button: {
        alignSelf: 'center',
        margin: '0 5px 0 5px'
    },
    input: {
        margin: '0 10px 5px 5px',
        width: '100%'
    }
});

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
        const { classes } = this.props;

        return (
            <form className={classes.root}>
                <Button variant="contained" color="primary" className={classes.button}>
                    +
                </Button>
                <TextField
                    className={classes.input}
                    multiline
                    id={this.props.element.id}
                    label={this.props.element.lable}
                    name={this.props.element.name}
                    type="text"
                    placeholder={this.props.element.placeholder}
                    value={this.state.name}
                    onChange={this.handleChange('name')}
                    margin="normal"
                    fullWidth={true}
                />
            </form>
        );
    }
}

AddNewElement.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AddNewElement);
