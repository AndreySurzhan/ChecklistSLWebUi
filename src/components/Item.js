import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import MoreButton from './MoreButton';
import Translation from './Translation';
import TextElement from './TextElement';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        display: 'inline-flex',
        width: '100%'
    },
    list: {
        paddingTop: theme.spacing.unit / 3,
        paddingButtom: theme.spacing.unit / 3

    }
});

class Item extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <Checkbox checked={this.props.item.checked} />
                <TextElement element={this.props.item}>
                    <Divider light />
                    <List className={classes.list}>
                        {this.props.item.translations.map((translation, i) => (
                            <Translation key={i} translation={translation} />
                        ))}
                    </List>
                </TextElement>
                <MoreButton />
            </div>
        );
    }
}

export default withStyles(styles)(Item);
