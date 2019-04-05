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
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
});

class LanguageDialog extends React.Component {
    constructor(props) {
        super();

        this.state = {
            languages: [...props.languages]
        };
    }

    handleCancel = () => {
        this.props.onClose(this.state.languages);
    };

    handleOk = () => {
        this.props.onClose(this.state.languages);
    };

    handleCheckboxChange = languageName => event => {
        const languages = Object.assign({}, this.state.languages);

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

    render() {
        return (
            <Dialog disableBackdropClick disableEscapeKeyDown maxWidth="xs" aria-labelledby="language-dialog-title" open={this.props.open}>
                <DialogTitle id="clsl-language-dialog-title">Supported Languages</DialogTitle>
                <DialogContent>
                    <FormLabel>Select language</FormLabel>
                    <FormGroup id="clsl-language-dialog-checkboxes">
                        {this.props.languages.map(language => (
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
                    <Button onClick={this.handleCancel} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={this.handleOk} color="primary">
                        Ok
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

LanguageDialog.propTypes = {
};

export default withStyles(styles)(LanguageDialog);
