import React from "react";
import CheckboxBlock from "../common/containers/CheckboxBlock";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import MoreButtonBlock from "../common/containers/MoreButtonBlock";
import Translation from "./Translation";
import TextElement from "../common/components/TextElement";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
    translations: {
        padding: 0,
        paddingTop: theme.spacing.unit / 3,
        paddingBottom: theme.spacing.unit / 3
    }
});

const handleDelete = item => event => {
    console.log("Delete Item", item);
};

const handleEdit = item => event => {
    console.log("Edit Item", item);
};

class Item extends React.Component {
    render() {
        const { classes } = this.props;
        const item = this.props.item;
        const options = [
            {
                text: "Delete",
                handleClick: handleDelete(item)
            },
            {
                text: "Edit",
                handleClick: handleEdit(item)
            }
        ];

        return (
            <React.Fragment>
                <CheckboxBlock checked={item.checked} />
                <TextElement text={item.text}>
                    <Divider light />
                    <List className={classes.translations}>
                        {item.translations.map((translation, i) => (
                            <Translation key={i} translation={translation} />
                        ))}
                    </List>
                </TextElement>
                <MoreButtonBlock options={options} />
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(Item);
