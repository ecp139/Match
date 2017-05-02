import React, { Component } from 'react';
import logo from './Match Game Logo.jpg';
import './App.css';
import Card from './Card';
let cardData = [
  {
    title: "One title",
    text: "More text",
    id: 1,
    matchId: 1,
    flips: false,
  },
  {
    title: "Second Title",
    text: "More text!",
    id: 2,
    matchId: 1,
    flips: false,
  },
  {
    title: "Third Title",
    text: "More text!",
    id: 3,
    matchId: 2,
    flips: false,
  },
  {
    title: "Fourth Title",
    text: "More text!",
    id: 4,
    matchId: 2,
    flips: false,
  },
];

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      cardData: cardData
    }
    this.flipCard=this.flipCard.bind(this);
    this.flipCarda=this.flipCarda.bind(this);
    this.flipCardb=this.flipCardb.bind(this);
    this.flipCardc=this.flipCardc.bind(this);
  }
  flipCard(){
    cardData[0].id = <img src={logo} className="App-card" alt="logo" />;
    this.setState({
      cardData: cardData
    })
  }
  flipCarda(){
    cardData[1].id = <img src={logo} className="App-card" alt="logo" />;
    this.setState({
      cardData: cardData
    })
  }
  flipCardb(){
    cardData[2].id = <img src={logo} className="App-card" alt="logo" />;
    this.setState({
      cardData: cardData
    })
  }
  flipCardc(){
    cardData[3].id = <img src={logo} className="App-card" alt="logo" />;
    this.setState({
      cardData: cardData
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Match Game</h2>
        </div>
      <div className="Card" onClick={this.flipCard}>
      <Card id={this.state.cardData[0].id}/>
      </div>
      <div className="Card" onClick={this.flipCarda}>
      <Card id={this.state.cardData[1].id}/>
      </div>
      <div className="Card" onClick={this.flipCardb}>
      <Card id={this.state.cardData[2].id}/>
      </div>
      <div className="Card" onClick={this.flipCardc}>
      <Card id={this.state.cardData[3].id}/>
      </div>
      </div>
    );
  }
}
export default App;
