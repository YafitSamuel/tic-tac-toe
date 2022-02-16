
import "./App.css";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      current: "x",
      matrix: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
      ],
    };
  }
  checkWinner() {
    if (
      this.state.matrix[0][0] !== '' &&
      this.state.matrix[0][0] === this.state.matrix[0][1] &&
      this.state.matrix[0][1] === this.state.matrix[0][2]
    ) {
      alert(`the winner is ${this.state.matrix[0][0]}`);
    }
    if (
      this.state.matrix[1][0] !== '' &&
      this.state.matrix[1][0] === this.state.matrix[1][1] &&
      this.state.matrix[1][1] === this.state.matrix[1][2]
    ) {
      alert(`the winner is ${this.state.matrix[1][0]}`);
    }
    if (
      this.state.matrix[2][0] !== '' &&
      this.state.matrix[2][0] === this.state.matrix[2][1] &&
      this.state.matrix[2][1] === this.state.matrix[2][2]
    ) {
      alert(`the winner is ${this.state.matrix[2][0]}`);
    }
    if (
      this.state.matrix[0][0] !== '' &&
      this.state.matrix[0][0] === this.state.matrix[1][0] &&
      this.state.matrix[1][0] === this.state.matrix[2][0]
    ) {
      alert(`the winner is ${this.state.matrix[0][0]}`);
    }
    if (
      this.state.matrix[0][1] !== '' &&
      this.state.matrix[0][1] === this.state.matrix[1][1] &&
      this.state.matrix[1][1] === this.state.matrix[2][1]
    ) {
      alert(`the winner is ${this.state.matrix[2][1]}`);
    }
    if (
      this.state.matrix[0][2] !== '' &&
      this.state.matrix[0][2] === this.state.matrix[1][2] &&
      this.state.matrix[1][2] === this.state.matrix[2][2]
    ) {
      alert(`the winner is ${this.state.matrix[2][2]}`);
    }
    if (
      this.state.matrix[0][0] !== '' &&
      this.state.matrix[0][0] === this.state.matrix[1][1] &&
      this.state.matrix[1][1] === this.state.matrix[2][2]
    ) {
      alert(`the winner is ${this.state.matrix[2][2]}`);
    }
    if (
      this.state.matrix[0][2] !== '' &&
      this.state.matrix[0][2] === this.state.matrix[1][1] &&
      this.state.matrix[1][1] === this.state.matrix[2][0]
    ) {
      alert(`the winner is ${this.state.matrix[2][0]}`);
    }
    
      
  }

  handleClick(i, j) {
    console.log(i, j);
    if (this.state.matrix[i][j] == "") {
      this.state.matrix[i][j] = this.state.current;
      this.setState({ matrix: this.state.matrix });

      if (this.state.current == "o") {
        this.setState({ current: "x" });
      } else {
        this.setState({ current: "o" });
      }

      this.checkWinner();
    } else {
      alert("do not cheat");
    }
  }
  render() {
    let boxes = [];
    for (let i = 0; i < this.state.matrix.length; i++) {
      for (let j = 0; j < this.state.matrix[i].length; j++) {
        let temp = (
          <div className="box" onClick={() => this.handleClick(i, j)}>
            {this.state.matrix[i][j]}
          </div>
        );
        boxes.push(temp);
      }
    }
    return <div className="App">{boxes}</div>;
  }
}

export default App;

