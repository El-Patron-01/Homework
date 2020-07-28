import React, { Component } from 'react';

import ListElement from './ListElement';

const styles = {
    text: {
      padding: 20
    }
  }

export default class List extends Component {  
    render () {
      return (
        <div style={ styles.text }>
          <ul className="list">
            {this.props.cars.map(({id, model, color}) => <ListElement key={id} model={model} color={color} />)}
          </ul>
        </div>
    
      )
    }
  }