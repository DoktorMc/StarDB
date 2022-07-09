import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import ErrorIndicator from "../error-indicator";
import ItemList from "../item-list";
import PeopleDetail from "../people-detail";

import './people-page.css';

export default class PeoplePage extends Component{
  SwapiService = new SwapiService();

  state = {
    selectedPerson: 1,
    hasError: false
}

  onPersonSelected = (selectedPerson) => {
    this.setState({ selectedPerson });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator/>
    }

    return (
      <div className="data-panel row mb2">
        <div className="col-md-6">
          <ItemList
            onItemSelected={this.onPersonSelected}
            getData={this.SwapiService.getAllPeople}
          />
        </div>
        <div className="col-md-6">
          <PeopleDetail personId={this.state.selectedPerson} />
        </div>
      </div>
    );
  }
}