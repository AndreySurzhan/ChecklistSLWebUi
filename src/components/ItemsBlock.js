import React from 'react';
import AddNewElement from './AddNewElement';
import Item from './Item';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';

class ItemsBlock extends React.Component {
    addNewItemElementProps = {
        id: "cssl-add-new-item-text-input",
        name: "newItemlistInput",
        placeholder: "Type in New Item text",
        lable: "Add New Item"
    }

    render() {
        return (
            <div id="cl-items-container" className={this.props.className}>
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

export default ItemsBlock;
