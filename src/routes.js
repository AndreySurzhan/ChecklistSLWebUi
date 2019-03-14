import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import App from '../src/common/components/App/App';
import ChecklistPage from './pages/ChecklistPage';
import LoginPage from './pages/LoginPage';
import {loadChecklists} from './actions/checklistActions';
import { connect } from 'react-redux';
import { withRouter } from "react-router";

const PrivateRoute = ({ component: Component, ...rest }) => (  
    <Route {...rest} render={props => {
        
        console.log(rest.isAuthenticated)

        return rest.isAuthenticated
        ? <Component {...props} /> 
        : <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
          }} />
    }}/>)

class Routes extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <App>
                <PrivateRoute exact path="/" component={ChecklistPage} isAuthenticated={this.props.isAuthenticated} onEnter={loadChecklists()}/>
                <Route path="/login" component={LoginPage} />
            </App>
        );
    };
}

function mapStateToProps(state) {
    console.log('RUTES', state);
  return {
    isAuthenticated: state.user.isAuthenticated
  }
}

export default withRouter(connect(mapStateToProps)(Routes));
