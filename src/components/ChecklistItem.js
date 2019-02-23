import React from "react";
import TextElement from "../common/components/TextElement";
import MoreButtonBlock from "../common/containers/MoreButtonBlock";

const handleDelete = checklist => event => {
    console.log("Delete Checklist", checklist);
};

const handleEdit = checklist => event => {
    console.log("Edit Checklist", checklist);
};

const handleShare = checklist => event => {
    console.log("Share Checklist", checklist);
};

class ChecklistsList extends React.Component {
    render() {
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
                <TextElement text={checklist.name} />
                <MoreButtonBlock options={options} />
            </React.Fragment>
        );
    }
}

export default ChecklistsList;
