import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import MoreButton from './MoreButton';
import Translation from './Translation';
import TextElement from './TextElement';
import { Grid } from '@material-ui/core';

class Item extends React.Component {
    render() {
        return (
            <div>
                <Grid container direction='row' spacing={8}>
                    <Grid item direction='column' xs={1}>
                        <Checkbox checked={this.props.item.checked} />
                    </Grid>
                    <Grid item direction='column' xs={10}>
                        <TextElement element={this.props.item}>
                            <Divider light />
                            <List>
                                {this.props.item.translations.map((translation, i) => (
                                    <Translation key={i} translation={translation} />
                                ))}
                            </List>
                        </TextElement>
                    </Grid>
                    <Grid item direction='column' xs={1}>
                        <MoreButton />
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Item;
