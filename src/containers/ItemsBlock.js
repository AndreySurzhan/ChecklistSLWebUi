import React from 'react';
import AddNewElement from '../common/components/AddNewElement';
import ItemsList from '../components/ItemsList';
import * as checklistActions from '../actions/checklistActions';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { PropTypes } from 'prop-types';

const styles = theme => ({
    root: {
        minHeight: '100vh'
    }
});

class ItemsBlock extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.textInputValue = '';
    }

    onClickAddElement = event => {
        let item = Object.assign({}, this.state.item)
        let translations = [
            {
                language: 'us',
                translation: `test`
            },
            {
                language: 'es',
                translation: 'le milk'
            },
            {
                language: 'ge',
                translation: 'milk'
            }
        ];

        item.translations = translations;
        item._id = Date.now();

        this.setState({
            item: item
        });

        this.props.actions.addItem(item);

        this.textInputValue = '';
        this.setState({
            item: {
                text: this.textInputValue
            }
        });
    };

    onTextInputChange = event => {
        this.textInputValue = event.target.value;
        this.setState({
            item: {
                text: this.textInputValue
            }
        });
    };

    render() {
        const { classes } = this.props;
        const addNewItemElementProps = {
            id: 'clsl-add-new-item-form',
            textInputId: 'clsl-add-new-item-text-input',
            buttonId: 'clsl-add-new-item-button',
            name: 'newItemlistInput',
            placeholder: 'Type in New Item text',
            lable: 'Add New Item',
            onClickAddElement: this.onClickAddElement,
            onTextInputChange: this.onTextInputChange,
            value: this.textInputValue
        };

        return (
            <div id="cl-items-container" className={classes.root}>
                <AddNewElement element={addNewItemElementProps} />
                <ItemsList items={this.props.items} />
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    const item = {
        _id: '',
        text: '',
        translations: []
    };
    const activeChecklist = state.checklists.filter(c => c.isActive)[0]
    const items = activeChecklist ? activeChecklist.items : [];

    return {
        item,
        items
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(checklistActions, dispatch)
    };
}

ItemsBlock.propTypes = {
    items: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(ItemsBlock));
