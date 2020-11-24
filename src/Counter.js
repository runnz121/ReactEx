import React, {Component} from 'react';

class Counter extends Component {

    state = { //state로 선언해주어야 rerendering 한다.
        number :0

    }

    //화살표 함수 안쓸경우
    //constructor(props) {
    //super(props);
    //this.handleIncrease = this.handleIncrease.bind(this);
    //this.handleDecrease = this.handleDecrease.bind(this);
    // }

    //handleIncrease() {
    //  console.log(this);
    //  this.setState({
    //          number:this.state.number +1});}
    //이런식으로 생성자 만들어서 this 선언 후 써주어야 한다.







    handleIncrease = () => {
        this.setState({
            number:this.state.number +1
        })
    }

    handleDecrease =() => {
        this.setState({
            number:this.state.number -1
        })

    }

    render() {
        return (
            <div>
                <h1>카운터</h1>
                <div>값: {this.state.number }</div>
                <button onClick ={this.handleIncrease}> + </button>
                <button onClick ={this.handleDecrease}> - </button>
            </div>
        )
    }
}

export default Counter;
