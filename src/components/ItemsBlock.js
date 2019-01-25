import React from 'react';
import AddNewElement from './AddNewElement';
import Item from './Item';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';

const styles = theme => ({
    root: {
        backgroundColor: '#B2EBF2',
        minHeight: '100vh'
    }
});

class ItemsBlock extends React.Component {
    addNewItemElementProps = {
        id: "cssl-add-new-item-text-input",
        name: "newItemlistInput",
        placeholder: "Type in New Item text",
        lable: "Add New Item"
    }

    render() {
        const { classes } = this.props;

        return (
            <div id="cl-items-container" className={classes.root}>
                <AddNewElement element={this.addNewItemElementProps}/>
                <Divider />
                <List>
                    {this.props.items.map((item, i) => (
                        <Item key={i} item={item} />
                    ))}
                </List>
            </div>
        );
    }
}

export default withStyles(styles)(ItemsBlock);
