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
import Spinner from '../common/components/Spinner';
import { connect } from 'react-redux';
import * as userActions from '../actions/userActions';
import { bindActionCreators } from 'redux';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    dialogContent: {
        width: '400px',
        maxHeight: '400px'
    }
});

class LanguageDialog extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            user: Object.assign({}, this.props.user.user)
        };

        this.originalLanguages = [...this.props.user.user.languages];

        this.handleCancelClick = this.handleCancelClick.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
        this.handleOkClick = this.handleOkClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleCancelClick() {
        this.props.onClose();
    }

    handleCheckboxChange(selectedLanguage) {
        return event => {
            const user = Object.assign({}, this.props.user.user);

            if(user.languages.includes(selectedLanguage.code)) {
                const index = user.languages.indexOf(selectedLanguage.code);

                user.languages.splice(index, 1);
            } else {
                user.languages.push(selectedLanguage.code);
            }

            this.setState({
                user
            });
        };
    }

    handleOkClick(event) {
        if (isArraysEqual(this.originalLanguages, this.state.user.languages)) {
            this.props.onClose();
        } else {
            this.props.userActions.updateUser(this.state.user);
            
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
                        {this.props.languages.isFetching
                            ? (<Spinner size={100} thickness={2} />)
                            : this.props.languages.languages.map(language => (
                                <FormControlLabel
                                    value={language.name}
                                    key={language.name}
                                    label={language.name}
                                    control={
                                        <Checkbox
                                            handleChange={this.handleCheckboxChange(language)}
                                            checked={this.state.user.languages.includes(language.code)}
                                        />
                                    }
                                />
                            ))
                        }
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
        languages: state.languages
    };
}

function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators(userActions, dispatch)
    };
}

function isArraysEqual(a, b) {
    const arrayA = [...a];
    const arrayB = [...b];

    arrayA.sort();
    arrayB.sort();

    return arrayA.length === arrayB.length && arrayA.every((element, index) => element === arrayB[index]);
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
