import React from 'react';
import PrimaryDisplay from "./PrimaryDisplay.js"
import SecondaryDisplay from "./SecondaryDisplay.js"

class Display extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <SecondaryDisplay totalExpression={this.props.totalExpression}/>
                <PrimaryDisplay currentInteger={this.props.currentInteger}/>
            </div>
        )
    }
}

export default Display;