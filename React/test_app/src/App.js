import './App.css';

import React, { Component } from 'react';

import { v4 as uuidv4 } from 'uuid';

import List from './List';

const styles = {
  text: {
    padding: 20
  }
}


export default class App extends Component {
  state = {
    cars: [
      {
        id: uuidv4(),
        model: 'Mazda',
        color: 'red',
      },
      {
        id: uuidv4(),
        model: 'Toyota',
        color: 'red',
      },
      {
        id: uuidv4(),
        model: 'WV',
        color: 'blue',
      },
      {
        id: uuidv4(),
        model: 'Mercedes',
        color: 'red',
      },
    ]
  }

  addClickBtn () {
    const { state: {cars} } = this;
    const model = document.getElementById("carModel").value;
    const color = document.getElementById("carColor").value;
    if (model && color) {
      this.setState ({
        cars: [
          ...cars,
          {
            id: uuidv4(),
            model: model,
            color: color,
          }
        ]
      })
    } else {
      this.setState ({
        cars: [
          ...this.state.cars,
          {
            id: uuidv4(),
            model: 'New Car',
            color: 'blue',
          }
        ]
      })
    }
  }

  deleteClickBtn () {
    const { state: {cars} } = this;

    this.setState ({
      cars: cars.slice(1, cars.length)
    })
  }

  filterClickBtn () {
    const { state: {cars} } = this;
    const colorFilter = document.getElementById("filterByColor").value;
    if (colorFilter) {
      this.setState ({
        cars: cars.filter(el => el.color === colorFilter)
      })
    } else {
    this.setState ({
      cars: cars.filter(el => el.color === 'blue')
    })
  }
  }

  render () {
    return (
      <div style={ styles.text } className="container">
        <List cars={this.state.cars}/>
        <form>
          <p><b>Car model: </b>
            <input type="text" size="30" id="carModel"/>
            <b> Car color: </b>
            <input type="text" size="30" id="carColor"/>
          </p>
          <p><b>Filter by color: </b>
            <input type="text" size="30" id="filterByColor"/>
          </p>
        </form>
        <div className="buttons">
          <button style={styles.text} className="button" onClick={this.addClickBtn.bind(this)}>ADD CAR</button>
          <button style={styles.text} className="button" onClick={this.deleteClickBtn.bind(this)}>DELETE CAR</button>
          <button style={styles.text} className="button" onClick={this.filterClickBtn.bind(this)}>FILTER CAR</button>
        </div>
      </div>
  
    )
  }
}
