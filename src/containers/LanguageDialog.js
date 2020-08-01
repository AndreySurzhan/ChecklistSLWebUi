import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import FormLabel from '@material-ui/core/FormLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '../common/components/Checkbox';
import { connect } from 'react-redux';
import * as userActions from '../actions/userActions';
import { bindActionCreators } from 'redux';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    dialogContent: {
        width: '400px',
        height: '400px'
    }
});

class LanguageDialog extends React.Component {
    constructor(props) {
        super();

        const languageViewModels = this.getLanguageViewModels(props.languages, props.user.user.languages);

        this.state = {
            languageViewModels,
            user: Object.assign({}, props.user.user)
        };

        this.handleCancelClick = this.handleCancelClick.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.handleOkClick = this.handleOkClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    getLanguageViewModels = (languages, userLanguages) => {
        return languages
            .map(this.createLanguageViewModel(userLanguages))
            .sort(this.sortLanguageViewModelsByName)
            .sort(this.sortLanguageViewModelsByChecked);
    }

    createLanguageViewModel(userLanguages) {
        return language => {
            return {
                name: language.name,
                code: language.code,
                checked: userLanguages.includes(language.code)
            };
        }
    }

    sortLanguageViewModelsByName(a, b) {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();

        if (nameA < nameB) {
            return -1;
        }

        if (nameA > nameB) {
            return 1;
        }

        return 0;
    }

    sortLanguageViewModelsByChecked(a, b) {
        if (a.checked && !b.checked) {
            return -1;
        }
        if (!a.checked && b.checked) {
            return 1;
        }

        return 0;
    }

    handleCancelClick() {
        this.props.onClose();
    }

    handleCheckboxChange(selectedLanguage) {
        return event => {
            const languageViewModels = [...this.state.languageViewModels];

            for (let i = 0; i < languageViewModels.length; i++) {
                const language = languageViewModels[i];

                if (language.code === selectedLanguage.code) {
                    language.checked = event.target.checked;

                    break;
                }
            }

            this.setState({
                languageViewModels
            });
        };
    }

    handleOkClick(event) {
        const user = Object.assign({}, this.state.user);
        const languageViewModels = [...this.state.languageViewModels];
        const langCodes = languageViewModels.filter(l => l.checked).map(l => l.code);

        if (langCodes.length !== user.languages.length || !langCodes.every(l => user.languages.includes(l))) {
            user.languages = langCodes;

            this.props.userActions.updateUser(user);

            this.setState({
                languageViewModels,
                user
            });

            this.props.onClose();
        } else {
            this.props.onClose();
        }
    }

    handleClose() {
        this.props.onClose();
    }

    render() {
        const { classes } = this.props;

        return (
            <Dialog
                disableBackdropClick={this.props.isInitLoad}
                disableEscapeKeyDown={this.props.isInitLoad}
                aria-labelledby="language-dialog-title"
                onClose={this.handleClose}
                open={this.props.open}
            >
                <DialogTitle id="clsl-language-dialog-title">Translation languages</DialogTitle>
                <DialogContent className={classes.dialogContent}>
                    <FormLabel>Select language</FormLabel>
                    <FormGroup id="clsl-language-dialog-checkboxes">
                        {this.state.languageViewModels.map(language => (
                            <FormControlLabel
                                value={language.name}
                                key={language.name}
                                label={language.name}
                                control={
                                    <Checkbox
                                        handleChange={this.handleCheckboxChange(language)}
                                        checked={language.checked}
                                    />
                                }
                            />
                        ))}
                    </FormGroup>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleCancelClick} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={this.handleOkClick} color="primary">
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        user: state.user,
        languages: state.languages.languages
    };
}

function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators(userActions, dispatch)
    };
}

LanguageDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    classes: PropTypes.object.isRequired,
    isInitLoad: PropTypes.bool.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(LanguageDialog));
