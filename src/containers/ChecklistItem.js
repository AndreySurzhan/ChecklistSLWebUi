import React from "react";
import TextElement from "../common/components/TextElement";
import MoreButtonBlock from "../common/containers/MoreButtonBlock";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
    isActive: {
        color: "#FFFFFF",
        backgroundColor: "#455A64"
    }   
});

const handleDelete = checklist => event => {
    console.log("Delete Checklist", checklist);
};

const handleEdit = checklist => event => {
    console.log("Edit Checklist", checklist);
};

const handleShare = checklist => event => {
    console.log("Share Checklist", checklist);
};

class ChecklistItem extends React.Component {
    render() {
        const { classes } = this.props;
        const checklist = this.props.checklist;
        const options = [
            {
                text: "Delete",
                handleClick: handleDelete(checklist)
            },
            {
                text: "Edit",
                handleClick: handleEdit(checklist)
            },
            {
                text: "Share",
                handleClick: handleShare(checklist)
            }
        ];

        return (
            <React.Fragment>
                <TextElement className={checklist.isActive ? classes.isActive : ''} text={checklist.name} />
                <MoreButtonBlock options={options} />
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(ChecklistItem);