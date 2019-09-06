/* eslint-disable react/destructuring-assignment */
/* eslint-disable max-classes-per-file */
import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto';
import './index.css';
// class Square extends React.Component {
//     render() {
//         return (
//             <button
//                 className="square"
//                 onClick={() => { this.props.onClick()}}
//             >
//                 {this.props.value}
//             </button>
//         );
//     }
// }
function Square(props) {
  return (
    <button className="square" type="button" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i += 1) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Squares: Array(9).fill(null),
      xIsNext: true
    };
  }

  handleClick(i) {
    const squares = this.state.Squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState(prevState => ({
      Squares: squares,
      xIsNext: !prevState.xIsNext
    }));
  }

  renderSquare(i) {
    return (
      <Square
        value={this.state.Squares[i]}
        onClick={() => {
          this.handleClick(i);
        }}
      />
    );
  }

  render() {
    const winner = calculateWinner(this.state.Squares);
    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
    }
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}

// ========================================

ReactDOM.render(<Game />, document.getElementById('root'));
