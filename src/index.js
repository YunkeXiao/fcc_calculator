import React from 'react';
import Display from './Display.js';
import Buttons from './Buttons.js';
import ReactDOM from 'react-dom';
import './index.css';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentInteger: '0',
            totalExpression: 'Lmfao'
        };
        this.updateCurrentNumber = this.updateCurrentNumber.bind(this);
        this.updateOperator = this.updateOperator.bind(this);
        this.submitCurrentNumber = this.submitCurrentNumber.bind(this);
    }

    updateCurrentNumber(newValue) {
        this.setState({
            currentInteger: newValue.toString()
        })
    }

    updateOperator(operator) {
        let tempTotalExpression = this.state.totalExpression;
        this.setState({
            totalExpression: (tempTotalExpression + " " + operator + " ")
        })
    }

    submitCurrentNumber(number) {
        let tempTotalExpression = this.state.totalExpression;
        this.setState({
            totalExpression: (tempTotalExpression + " " + number)
        })
    }

    render() {
        return (
            <div id="calculatorDisplay">
                <Display currentInteger={this.state.currentInteger} totalExpression={this.state.totalExpression} />
                <Buttons updateCurrentNumber={this.updateCurrentNumber} updateOperator={this.updateOperator}
                         submitCurrentNumber={this.submitCurrentNumber}/>
            </div>
        )
    }
}

ReactDOM.render(<Calculator/>, document.getElementById("root"));