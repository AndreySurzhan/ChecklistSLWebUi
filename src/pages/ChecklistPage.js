import React from 'react';
import ItemsBlock from '../containers/ItemsBlock';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';
import UserSummary from '../components/UserSummary';
import ChecklistsBlock from '../containers/ChecklistsBlock';
import LanguageDialog from '../containers/LanguageDialog';
import { SupportedLanguages } from '../utils/enums';
import * as checklistActions from '../actions/checklistActions';
import * as userActions from '../actions/userActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

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

        this.state = {
            user: Object.assign({}, this.props.user.user),
            openLanguageDialog: this.props.user.user.languages.length === 0,            
            languages: this.getSupportedLanguage()
        };

        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.handleLanguagesButtonClick = this.handleLanguagesButtonClick.bind(this);
    }

    getSupportedLanguage = () => {
        return new SupportedLanguages().languages.map(l => {
            return {
                name: l.name,
                code: l.code,
                checked: this.props.user.user.languages.includes(l.code)
            };
        })
        // Sort Alphabetically 
        .sort((a, b) => {
            var nameA = a.name.toUpperCase();
            var nameB = b.name.toUpperCase();
            if (nameA < nameB) {
              return -1;
            }

            if (nameA > nameB) {
              return 1;
            }
          
            return 0;
        })
        // Checked at the top of the list
        .sort((a, b) => {
            if (a.checked && !b.checked) {
                return -1;
            }
            if (!a.checked && b.checked){
                return 1
            }

            return 0;
        });
    }

    componentWillMount() {
        this.props.checklistActions.loadChecklists();
    }

    handleLogoutClick = event => {
        this.props.userActions.logout();
        this.props.history.push('/login');
    };

    handleLanguageDialogClose = languages => {
        const user = Object.assign({}, this.state.user);
        const langCodes = languages.filter(l => l.checked).map(l => l.code);

        if (langCodes.length !== user.languages.length || !langCodes.every((l) => user.languages.includes(l))) {
            user.languages = langCodes;

            this.props.userActions.updateUser(user);

            this.setState({
                openLanguageDialog: false,
                languages,
                user
            });
        } else {
            this.setState({
                openLanguageDialog: false
            }); 
        }
    }

    handleLanguagesButtonClick = event => {
        this.setState({
            openLanguageDialog: true
        }); 
    }

    render() {
        const { classes } = this.props;

        return (
            <React.Fragment>
                <Grid id="clsl-checklist-page-container" container direction="row" spacing={0} className={classes.root}>
                    <Grid id="clsl-nav-container" item xs={3} className={classes.nav}>
                        <UserSummary
                            id="clsl-user-summary-container"
                            user={this.props.user.user}
                            handleLogoutClick={this.handleLogoutClick}
                            handleLanguagesButtonClick={this.handleLanguagesButtonClick}
                        />
                        <ChecklistsBlock id="clsl-checklists-block-container" />
                    </Grid>
                    <Grid id="clsl-items-container" item xs={9}>
                        <ItemsBlock id="clsl-items-block-container" items={this.items} />
                    </Grid>
                </Grid>
                <LanguageDialog 
                    languages={this.state.languages} 
                    open={this.state.openLanguageDialog} 
                    onClose={this.handleLanguageDialogClose}
                    isInitLoad={this.state.user.languages.length === 0} />
            </React.Fragment>
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
