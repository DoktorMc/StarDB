import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import ItemList from "../item-list";
import ItemDetail from "../item-detail";
import Row from "../row";
import ErrorBoundry from "../error-boundry";

import "./people-page.css";
export default class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPerson: 1,
  };

  onPersonSelected = (selectedPerson) => {
    this.setState({ selectedPerson });
  };

  render() {
    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
      >
        {(i) => `${i.name} (${i.birthYear})`}
      </ItemList>
    );

    const personDetails = <ItemDetail personId={this.state.selectedPerson} />;
    
    return (
      <ErrorBoundry>
        <Row left={itemList} rigth={personDetails} />
      </ErrorBoundry>
    );
  }
}
