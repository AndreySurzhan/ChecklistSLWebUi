import React from 'react';
import ItemsBlock from '../containers/ItemsBlock';
import Grid from '@material-ui/core/Grid';
import UserSummary from '../components/UserSummary';
import ChecklistsBlock from '../containers/ChecklistsBlock';
import * as checklistActions from '../actions/checklistActions';
import * as userActions from '../actions/userActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import avatarImage from '../images/avatar.jpg';

const styles = theme => ({
    root: {
        minHeight: '100vh'
    },
    nav: {
        backgroundColor: '#607D8B'
    }
});


class ChecklistPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    user = {
        username: 'Sponge Bob Round Panties',
        avatar: avatarImage
    };

    handleLogoutClick = event => {
        this.props.userActions.logout();
        this.props.history.push("/login");
    }

    render() {
        const { classes } = this.props;

        return (
            <Grid id="clsl-checklist-page-container" container direction="row" spacing={0} className={classes.root}>
                <Grid id="clsl-nav-container" item xs={3} className={classes.nav}>
                    <UserSummary id="clsl-user-summary-container" user={this.user} handleLogoutClick={this.handleLogoutClick} />
                    <ChecklistsBlock id="clsl-checklists-block-container"/>
                </Grid>
                <Grid id="clsl-items-container" item xs={9}>
                    <ItemsBlock id="clsl-items-block-container" items={this.items} />
                </Grid>
            </Grid>
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
        checklistActions: bindActionCreators(checklistActions, dispatch),
        userActions: bindActionCreators(userActions, dispatch)
    };
}

ChecklistPage.propTypes = {
    classes: PropTypes.object.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(ChecklistPage));
