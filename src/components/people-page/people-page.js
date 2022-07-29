import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import ErrorIndicator from "../error-indicator";
import ItemList from "../item-list";
import PeopleDetail from "../people-detail";

import './people-page.css';

const Row = ({ left, rigth }) => {
  return (
    <div className="data-panel row mb2">
      <div className="col-md-6">{left}</div>
      <div className="col-md-6">{rigth}</div>
    </div>
  );
}
 
export default class PeoplePage extends Component{
  swapiService = new SwapiService();

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

    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
        renderItem={({ name, gender, birthYear }) =>
          `${name} (${gender}, ${birthYear})`
        }
      />
    );

    const personDetails = (
      <PeopleDetail personId={this.state.selectedPerson} />
    );
    return (
      <Row left={itemList} rigth={personDetails} />
    );
  }
}