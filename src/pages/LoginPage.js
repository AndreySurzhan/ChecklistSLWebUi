import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '../common/components/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import * as userActions from '../actions/userActions';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from "react-router";

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

class LoginPage extends Component {
    state = {
        username: 'andrei',
        password: '123',
        rememberMe: false
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value || event.target.checked
        });
    };

     handleLoginClick = event => {
        const user = Object.assign({}, {
            username: this.state.username,
            password: this.state.password
        })
        
        this.props.actions.login(user);
    }
    
    render() {
        const { classes } = this.props;
        return (
            <div id="clsl-login-container" className={[classes.root, classes.flexContainerColumns].join(' ')}>
                <Paper className={[classes.paper, classes.flexContainerColumns].join(' ')}>
                    <Typography className={classes.typography} variant="h4">
                        Login to ChecklistSL
                    </Typography>
                    <FormControl id="clsls-login-form" autoComplete="off" className={classes.flexContainerColumns}>
                        <TextField
                            className={classes.textField}
                            id="clsl-username"
                            label="Username"
                            name="username"
                            type="email"
                            value={this.state.username}
                            onChange={this.handleChange('username')}
                            margin="normal"
                            autoFocus={true}
                        />
                        <TextField
                            className={classes.textField}
                            id="clsl-password"
                            label="Password"
                            name="username"
                            value={this.state.password}
                            type="password"
                            autoComplete="current-password"
                            onChange={this.handleChange('password')}
                            margin="normal"
                        />
                        <FormControlLabel
                            checked={this.state.rememberMe}
                            control={<Checkbox checked={this.state.rememberMe} handleChange={this.handleChange('rememberMe')}/>}
                            label="Remember Me"
                        />
                    </FormControl>
                    <Button
                        className={classes.button}
                        //href="/"
                        onClick={this.handleLoginClick}
                        label="Submit Login form"
                        variant="contained"
                        color="primary"
                    >
                        Login
                    </Button>
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

LoginPage.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(LoginPage)));
