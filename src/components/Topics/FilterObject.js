import React, { Component } from 'react';

export default class FilterObject extends Component {

  constructor() {
    super();

    this.state = {
      bikes: [
        {
          brand: 'KTM',
          color: 'orange',
          size: 250,
        },
        {
          brand: 'Yamaha',
          color: 'blue',
          tires: 2,
        },
        {
          brand: 'Honda',
          color: 'red',
          location: 'Japan',
        }
      ],

      userInput: '',
      filter: []
    }
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  filterBikes(prop) {
    let bikes = this.state.bikes;
    let filterBikes = [];

    for (let i = 0; i < bikes.length; i++ ) {
      if ( bikes[i].hasOwnProperty(prop) ) {
        filterBikes.push(bikes[i]);
      }
    }

    this.setState({ filterBikes: filterBikes });
  }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4> Filter Object </h4>
        <span className="puzzleText"> Original: { JSON.stringify(this.state.bikes, null, 10) } </span>
        <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }/>
        <button className="confirmationButton" onClick={ () => this.filterBikes(this.state.userInput) }> Filter </button>
        <span className="resultsBox"> { JSON.stringify(this.state.unfilteredBikes) } </span>
        <span className="resultsBox filterObjectRB"> Filter: { JSON.stringify(this.state.filterBikes) }</span>
      </div>
    )
  }
}