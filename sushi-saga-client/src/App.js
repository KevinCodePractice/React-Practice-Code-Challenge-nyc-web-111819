import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    plateArray: [],
    budget: 100
  }

  fetchSushi = () => {
    fetch(API)
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          sushis: data
        })
      })
  }

  componentDidMount(){
    this.fetchSushi()
  }

  eatSushi = (id) => {
    let eatenSushi = this.state.sushis.find(sushi => sushi.id === id)

    if (this.state.budget > eatenSushi.price){
      console.log("Eating this sushi")
      eatenSushi.eaten = true
      this.state.plateArray.push(eatenSushi)
      this.setState({
        sushis: this.state.sushis,
        budget: this.state.budget - eatenSushi.price
      })
    }
  }

  render() {
    // console.log(this.state.plateArray)
    return (
      <div className="app">
        <SushiContainer 
          sushis={this.state.sushis} 
          eatSushi={this.eatSushi} />
        <Table plateArray={this.state.plateArray} budget={this.state.budget} />
      </div>
    );
  }
}

export default App;