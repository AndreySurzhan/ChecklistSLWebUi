import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';
import { PropTypes } from 'prop-types';
import CircularProgress  from '@material-ui/core/CircularProgress';

const styles = theme => ({
    typography: {
        alignSelf: 'center',
        marginBottom: theme.spacing.unit * 2
    },
    textField: {
        alignSelf: 'center'
    },
    button: {
        marginTop: theme.spacing.unit * 3,
        marginBottom: theme.spacing.unit * 2
    },
    buttonProgress: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: -12,
      marginLeft: -12,
    }
});

const LoginRegForm = ({ classes, formProps, children, isFetching, errors }) => {
    const usernameInput = formProps.input.username;
    const passwordInput = formProps.input.password;
    const submitButton = formProps.submitButton;

    return (
        <React.Fragment>
            <Typography className={classes.typography} variant="h4">
                {formProps.title}
            </Typography>
            <FormControl id={formProps.id} autoComplete="off" className={classes.flexContainerColumns}>
                <TextField
                    className={classes.textField}
                    id={usernameInput.id}
                    label={usernameInput.label}
                    name={usernameInput.name}
                    type='email'
                    value={usernameInput.value}
                    onChange={usernameInput.handleInputChange}
                    margin="normal"
                    autoFocus={true}
                    error={errors.username} 
                    helperText = {errors.username} 
                />
                <TextField
                    className={classes.textField}
                    id={passwordInput.id}
                    label={passwordInput.label}
                    name={passwordInput.name}
                    type='password'
                    value={passwordInput.value}
                    autoComplete="current-password"
                    onChange={passwordInput.handleInputChange}
                    margin="normal"
                    error={errors.password}
                    helperText = {errors.password} 
                />
                {children}
            </FormControl>
            <Button
                disabled={isFetching}
                className={classes.button}
                onClick={submitButton.handleClick}
                label={submitButton.label}
                variant="contained"
                color="primary"
            >
                {submitButton.title}
                {isFetching && <CircularProgress size={24} className={classes.buttonProgress} />}
            </Button>
        </React.Fragment>
    );
};

LoginRegForm.propTypes = {
    classes: PropTypes.object.isRequired,
    formProps: PropTypes.object.isRequired
};

export default withStyles(styles)(LoginRegForm);
