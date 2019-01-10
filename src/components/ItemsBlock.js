import React from 'react';
import AddNewItemBlock from './AddNewItemBlock'
import Item from './Item';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';

class ItemsBlock extends React.Component {

    render() {
        return (
            <div className={this.props.className}>
                <AddNewItemBlock />
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
