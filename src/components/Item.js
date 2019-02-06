import React from 'react';
import CheckboxBlock from '../common/containers/CheckboxBlock';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import MoreButtonBlock from '../common/containers/MoreButtonBlock';
import Translation from './Translation';
import TextElement from '../common/components/TextElement';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        display: 'inline-flex',
        width: '100%',
        marginTop: theme.spacing.unit / 2,
        marginBottom: theme.spacing.unit / 2
    },
    list: {
        padding: 0,
        paddingTop: theme.spacing.unit / 3,
        paddingBottom: theme.spacing.unit / 3
    }
});

class Item extends React.Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <CheckboxBlock checked={this.props.item.checked} />
                <TextElement element={this.props.item}>
                    <Divider light />
                    <List className={classes.list}>
                        {this.props.item.translations.map((translation, i) => (
                            <Translation key={i} translation={translation} />
                        ))}
                    </List>
                </TextElement>
                <MoreButtonBlock />
            </div>
        );
    }
}

export default withStyles(styles)(Item);
