import React from 'react';
import AddNewElement from '../common/components/AddNewElement';
import ItemsList from '../components/ItemsList';
import * as itemActions from '../actions/itemActions';
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
        this.state = {
            item: {
                text: '',
                translations: []
            }
        };
    }

    onClickAddElement = event => {
        const item = this.state.item;
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

        //this.state.item.translations = translations;
        this.setState({
            item: item
        });

        this.props.actions.addItem(this.state.item);

        this.textInputValue = '';
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
    return {
        items: state.items
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(itemActions, dispatch)
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
