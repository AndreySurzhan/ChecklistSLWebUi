import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import * as userActions from '../actions/userActions';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router';
import LoginRegForm from '../components/LoginRegForm';

const styles = theme => ({
    root: {
        height: '100vh'
    },
    paper: {
        padding: theme.spacing.unit * 2,
        width: 400,
        alignSelf: 'center'
    },
    flexContainerColumns: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    flexContainerRows: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
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
    }
});

class LoginRegPage extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            username: '',
            password: '',
            languages: [],
            isLoginForm: this.isLoginForm()
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleRegistrationClick = this.handleRegistrationClick.bind(this);
    }

    isLoginForm() {
        return this.props.location.pathname === '/login';
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        });
    };

    handleLoginClick = event => {
        const user = Object.assign(
            {},
            {
                username: this.state.username,
                password: this.state.password
            }
        );
        console.log(process.env.REACT_APP_API_URL)
        this.props.actions.login(user);
    };

    handleRegistrationClick = event => {
        const user = Object.assign(
            {},
            {
                username: this.state.username,
                password: this.state.password,
                languages: this.state.languages
            }
        );

        this.props.actions.register(user);
    };

    handleChangeForm = event => {
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
    };

    render() {
        const { classes } = this.props;
        const loginFormProps = {
            title: 'Login to ChecklistSL',
            input: {
                username: {
                    id: 'clsl-username-login-input',
                    label: 'Username',
                    name: 'username',
                    type: 'email',
                    value: this.state.username,
                    handleInputChange: this.handleChange('username')
                },
                password: {
                    id: 'clsl-password-login-input',
                    label: 'Password',
                    name: 'password',
                    type: 'password',
                    value: this.state.password,
                    handleInputChange: this.handleChange('password')
                }
            },
            submitButton: {
                label: 'Submit Login form',
                handleClick: this.handleLoginClick,
                title: 'Login'
            }
        };
        const regFormProps = {
            title: 'Register to ChecklistSL',
            input: {
                username: {
                    id: 'clsl-password-reg-input',
                    label: 'Username',
                    name: 'username',
                    type: 'email',
                    value: this.state.username,
                    handleInputChange: this.handleChange('username')
                },
                password: {
                    id: 'clsl-username-reg-input',
                    label: 'Password',
                    name: 'password',
                    type: 'password',
                    value: this.state.password,
                    handleInputChange: this.handleChange('password')
                }
            },
            submitButton: {
                label: 'Submit Registration form',
                handleClick: this.handleRegistrationClick,
                title: 'Register'
            }
        };

        return (
            <div id="clsl-login-container" className={[classes.root, classes.flexContainerColumns].join(' ')}>
                <Paper className={[classes.paper, classes.flexContainerColumns].join(' ')}>
                    <React.Fragment>
                        <LoginRegForm formProps={this.state.isLoginForm ? loginFormProps : regFormProps} />
                        <Typography>
                            {this.state.isLoginForm ? "Don't have an account yet?" : 'Already have account?'}
                            <Button onClick={this.handleChangeForm}>
                                {this.state.isLoginForm ? 'Register' : 'Login'}
                            </Button>
                        </Typography>
                    </React.Fragment>
                </Paper>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        isAuthenticated: state.user.isAuthenticated
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(userActions, dispatch)
    };
}

LoginRegPage.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(withStyles(styles)(LoginRegPage))
);
