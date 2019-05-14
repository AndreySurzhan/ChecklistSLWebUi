import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';
import { PropTypes } from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';

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
        marginLeft: -12
    }
});

const LoginRegForm = ({
    classes,
    title,
    email,
    password,
    onPasswordChange,
    onEmailChange,
    onSubmitButton,
    children,
    isFetching,
    errors
}) => {
    return (
        <React.Fragment>
            <Typography className={classes.typography} variant="h5">
                {`${title} to ChecklistSL`}
            </Typography>
            <FormControl
                id={`clsl-${title.toLowerCase()}-form`}
                autoComplete="off"
                className={classes.flexContainerColumns}
            >
                <TextField
                    className={classes.textField}
                    id={'clsl-email-input'}
                    label={'Email'}
                    name={'email'}
                    type="email"
                    value={email}
                    onChange={onEmailChange}
                    margin="normal"
                    autoFocus={true}
                    error={!!errors.username}
                    helperText={errors.username}
                />
                <TextField
                    className={classes.textField}
                    id={'clsl-password-input'}
                    label={'Password'}
                    name={'password'}
                    type="password"
                    value={password}
                    autoComplete="current-password"
                    onChange={onPasswordChange}
                    margin="normal"
                    error={!!errors.password}
                    helperText={errors.password}
                />
                {children}
            </FormControl>
            <Button
                disabled={isFetching}
                className={classes.button}
                onClick={onSubmitButton}
                label={'Submit form'}
                variant="contained"
                color="primary"
            >
                {title}
                {isFetching && <CircularProgress size={24} className={classes.buttonProgress} />}
            </Button>
        </React.Fragment>
    );
};

LoginRegForm.propTypes = {
    classes: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    onSubmitButton: PropTypes.func.isRequired,
    onPasswordChange: PropTypes.func.isRequired,
    onEmailChange: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

export default withStyles(styles)(LoginRegForm);
