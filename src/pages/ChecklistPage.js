import React from 'react';
import Grid from '@material-ui/core/Grid';
import NavBar from '../components/NavBar';
import ChecklistsBlock from '../containers/ChecklistsBlock';
import LanguageDialog from '../containers/LanguageDialog';
import Language from '@material-ui/icons/Language';
import ExitToApp from '@material-ui/icons/ExitToApp';
import Button from '@material-ui/core/Button';
import * as checklistActions from '../actions/checklistActions';
import * as userActions from '../actions/userActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
    },
    checklist: {
        flexGrow: 1,
        marginTop: 48
    },
    buttonLink: {
        flexShrink: 0,
        fontSize: 12,
        minHeight: 0,
        padding: theme.spacing.unit /2
    }
});

class ChecklistPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            user: Object.assign({}, this.props.user.user),
            openLanguageDialog: this.props.user.user.languages.length === 0,
            drawerIsOpened: false
        };

        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.handleLanguagesButtonClick = this.handleLanguagesButtonClick.bind(this);
        this.toggleDrawer = this.toggleDrawer.bind(this);
    }

    componentWillMount() {
        this.props.checklistActions.loadChecklists();
    }

    handleLogoutClick = event => {
        this.props.userActions.logout();
        this.props.history.push('/login');
    };

    handleLanguagesButtonClick = event => {
        this.setState({
            openLanguageDialog: true
        });
    };

    handleLanguagesDialogClose = () => {
        this.setState({ openLanguageDialog: false });
    };

    toggleDrawer = event => {
        this.setState({
            drawerIsOpened: this.state.drawerIsOpened ? false : true
        });
    };

    render() {
        const { classes } = this.props;
        const drawerOptions = [
            {
                text: 'Languages',
                handleClick: this.handleLanguagesButtonClick,
                icon: <Language />
            },
            {
                text: 'Logout',
                handleClick: this.handleLogoutClick,
                icon: <ExitToApp />
            }
        ];

        return (
            <div className={classes.root}>
                <NavBar
                    openDrawer={this.state.drawerIsOpened}
                    toggleDrawer={this.toggleDrawer}
                    drawerOptions={drawerOptions}
                    user={this.props.user.user}
                />
                <Grid id="clsl-checklist-page-container" container direction="row" spacing={0} className={classes.checklist}>
                    <Grid id="clsl-nav-container" item xs={12}>
                        <ChecklistsBlock id="clsl-checklists-block-container" />
                    </Grid>
                </Grid>
                <Button target="_blank" href="http://translate.yandex.com/" className={classes.buttonLink}>
                    Powered by Yandex.Translate
                </Button>
                <LanguageDialog
                    open={this.state.openLanguageDialog}
                    onClose={this.handleLanguagesDialogClose}
                    isInitLoad={this.props.user.user.languages.length === 0}
                />
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        isAuthenticated: state.user.isAuthenticated,
        user: state.user
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
