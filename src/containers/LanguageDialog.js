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
import { SupportedLanguages } from '../utils/enums';
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

        this.state = {
            languages: this.filterLanguages(new SupportedLanguages().languages, props.user.user.languages),
            user: Object.assign({}, props.user.user)
        };

        this.filterLanguages = this.filterLanguages.bind(this);
        this.handleCancelClick = this.handleCancelClick.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.handleOkClick = this.handleOkClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    filterLanguages(languages, userLanguages) {
        return (
            languages
                .map(l => {
                    return {
                        name: l.name,
                        code: l.code,
                        checked: userLanguages.includes(l.code)
                    };
                })
                // Sort Alphabetically
                .sort((a, b) => {
                    const nameA = a.name.toUpperCase();
                    const nameB = b.name.toUpperCase();

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
                    if (!a.checked && b.checked) {
                        return 1;
                    }

                    return 0;
                })
        );
    }

    handleCancelClick() {
        this.props.onClose();
    }

    handleCheckboxChange = languageName => event => {
        const languages = [...this.state.languages];

        for (let i = 0; i < languages.length; i++) {
            const language = languages[i];

            if (language.name === languageName) {
                language.checked = event.target.checked;

                break;
            }
        }

        this.setState({
            languages
        });
    };

    handleOkClick(event) {
        const user = Object.assign({}, this.state.user);
        const languages = [...this.state.languages];
        const langCodes = languages.filter(l => l.checked).map(l => l.code);

        if (langCodes.length !== user.languages.length || !langCodes.every(l => user.languages.includes(l))) {
            user.languages = langCodes;

            this.props.actions.updateUser(user);

            this.setState({
                languages: this.filterLanguages(languages, user.languages),
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
                        {this.state.languages.map(language => (
                            <FormControlLabel
                                value={language.name}
                                key={language.name}
                                label={language.name}
                                control={
                                    <Checkbox
                                        handleChange={this.handleCheckboxChange(language.name)}
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
        user: state.user
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(userActions, dispatch)
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
