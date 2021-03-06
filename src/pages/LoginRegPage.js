import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import * as userActions from '../actions/userActions';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router';
import LoginRegForm from '../components/LoginRegForm';
import * as validate from '../utils/validate';

const styles = theme => ({
    root: {
        height: '100vh',
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

class LoginRegPage extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            username: '',
            password: '',
            languages: [],
            isLoginForm: this.isLoginForm(),
            errors: {}
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeForm = this.handleChangeForm.bind(this);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleRegistrationClick = this.handleRegistrationClick.bind(this);
    }

    isLoginForm() {
        return this.props.location.pathname === '/login';
    }

    handleChange(name) {
        return event => {
            this.setState({
                [name]: event.target.value
            });
        };
    }

    handleLoginClick(event) {
        if (!this.formIsValid()) {
            return;
        }

        const user = Object.assign(
            {},
            {
                username: this.state.username,
                password: this.state.password
            }
        );

        this.props.actions.login(user);
    }

    handleRegistrationClick(event) {
        if (!this.formIsValid()) {
            return;
        }

        const user = Object.assign(
            {},
            {
                username: this.state.username,
                password: this.state.password,
                languages: this.state.languages
            }
        );

        this.props.actions.register(user);
    }

    handleChangeForm(event) {
        if (this.isLoginForm()) {
            this.props.history.push('/register');
            this.setState({
                isLoginForm: false
            });
        } else {
            this.props.history.push('/login');
            this.setState({
                isLoginForm: true
            });
        }
    }

    formIsValid() {
        let isValid = true;
        let errors = {};

        if (!validate.isEmailValid(this.state.username)) {
            errors.username = 'Email is not valid';
            isValid = false;
        }

        if (!validate.isNotEmpty(this.state.password)) {
            errors.password = 'Password should not be empty';
            isValid = false;
        }

        this.setState({ errors });

        return isValid;
    }

    render() {
        const { classes } = this.props;
        const isFetching = this.props.isFetching;
        const isLoginForm = this.state.isLoginForm;

        return (
            <div id="clsl-login-container" className={classes.root}>
                <LoginRegForm
                    isFetching={isFetching}
                    password={this.state.password}
                    email={this.state.username}
                    title={isLoginForm ? 'Login' : 'Register'}
                    onPasswordChange={this.handleChange('password')}
                    onEmailChange={this.handleChange('username')}
                    onSubmitButton={isLoginForm ? this.handleLoginClick : this.handleRegistrationClick}
                    errors={this.state.errors}
                />
                <Typography>
                    {this.state.isLoginForm ? "Don't have an account yet?" : 'Already have account?'}
                    <Button disabled={isFetching} onClick={this.handleChangeForm}>
                        {this.state.isLoginForm ? 'Register' : 'Login'}
                    </Button>
                </Typography>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        isAuthenticated: state.user.isAuthenticated,
        isFetching: state.user.isFetching
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(userActions, dispatch)
    };
}

LoginRegPage.propTypes = {
    classes: PropTypes.object.isRequired,
    isFetching: PropTypes.bool.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
};

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(withStyles(styles)(LoginRegPage))
);
