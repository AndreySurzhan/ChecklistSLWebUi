import React from 'react';
import AddNewItemBlock from '../AddNewItemBlock/AddNewItemBlock'
import Item from '../../components/Item/Item';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';

class ItemsBlock extends React.Component {

    items = [
        {
            checked: true,
            text: 'test checklist name',
            translations: [
                {
                    language: 'ru',
                    translation: 'молоко'
                }
            ]
        }
    ];

    render() {
        return (
            <div className={this.props.className}>
                <AddNewItemBlock />
                <Divider />
                <List>
                    {this.items.map((item, i) => (
                        <Item key={i} item={item} />
                    ))}
                </List>
            </div>
        );
    }
}

export default ItemsBlock;
