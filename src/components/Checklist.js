import React from 'react';
import TextElement from './TextElement';
import MoreButton from './MoreButton';

class Checklist extends React.Component {
    render() {
        return (
            <div>
                <TextElement element={this.props.checklist} />

                <MoreButton />
            </div>
        );
    }
}

export default Checklist;
