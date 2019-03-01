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

        this.state = {
            item: Object.assign({}, this.props.item),
            items: [...this.props.items]
        };
        
        this.onClickAddElement = this.onClickAddElement.bind(this);
        this.onTextInputChange = this.onTextInputChange.bind(this);
    }

    onClickAddElement = event => {
        const item = Object.assign({}, this.state.item);

        item.translations = [];
        item.checked = false;

        this.setState({
            item: item
        });

        this.props.actions.addItem(item);

        this.setState({
            item: {
                text: ''
            }
        });
    };

    onTextInputChange = event => {
        this.setState({
            item: {
                text: event.target.value
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
            value: this.state.item.text
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
        text: '',
        translations: [],
        checked: false
    };
    const activeChecklist = state.checklists.filter(c => c.isActive)[0];
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
    item: PropTypes.object.isRequired,
    items: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(ItemsBlock));
