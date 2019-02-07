import React from 'react';
import CheckboxBlock from '../common/containers/CheckboxBlock';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import MoreButtonBlock from '../common/containers/MoreButtonBlock';
import Translation from './Translation';
import TextElement from '../common/components/TextElement';
import { withStyles } from '@material-ui/core/styles';
import { ListItem } from '@material-ui/core';

const styles = theme => ({
    listItem: {
        padding: 0,
        width: '100%',
        marginTop: theme.spacing.unit / 2,
        marginBottom: theme.spacing.unit
    },
    translations: {
        padding: 0,
        paddingTop: theme.spacing.unit / 3,
        paddingBottom: theme.spacing.unit / 3
    }
});

class ItemsList extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <List>
                {this.props.items.map((item, i) => (
                    <ListItem key={i} className={classes.listItem}>
                        <CheckboxBlock checked={item.checked} />
                        <TextElement text={item.text}>
                            <Divider light />
                            <List className={classes.translations}>
                                {item.translations.map((translation, i) => (
                                    <Translation key={i} translation={translation} />
                                ))}
                            </List>
                        </TextElement>
                        <MoreButtonBlock />
                    </ListItem>
                ))}
            </List>
        );
    }
}

export default withStyles(styles)(ItemsList);
