import React, { Component } from 'react';
import SwapiService from '../../services/swapi-service';

import Header from '../header';
import ItemList from '../item-list';
import PeopleDetail from '../people-detail';
import PeoplePage from '../people-page/people-page';
import RamdomPlanet from '../random-planet';

import './app.css'

export default class App extends Component {
  SwapiService = new SwapiService();

  state = {
    
  };

  render() {
    return (
      <div className="container">
        <Header />
        <RamdomPlanet />

        <PeoplePage/>

        <div className="data-panel row mb2">
          <div className="col-md-6">
            <ItemList onItemSelected={this.onPersonSelected}
              getData={this.SwapiService.getAllPlanets}/>
          </div>
          <div className="col-md-6">
            <PeopleDetail personId={ this.state.selectedPerson}/>
          </div>
        </div>
      </div>
    );
  }
 
};

