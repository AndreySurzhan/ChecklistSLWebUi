import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Login extends Component {
    state = {
        username: 'Cat in the Hat',
        password: ''
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value
        });
    };

    render() {
        return (
            <div>
                <form className={classes.container} noValidate autoComplete="off">
                    <TextField
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
                        id="clsl-password"
                        label="Password"
                        name="username"
                        value={this.state.password}
                        type="password"
                        onChange={this.handleChange('password')}
                        margin="normal"
                    />
                </form>
                <Button variant="contained" color="primary" className={classes.button}>
                    Login
                </Button>
            </div>
        );
    }
}

export default Login;
