import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";

import Header from "../header";
import ItemList from "../item-list";
import ItemDetail from "../item-detail";
import PeoplePage from "../people-page/people-page";
import RamdomPlanet from "../random-planet";

import "./app.css";
import Row from "../row";

export default class App extends Component {
  swapiService = new SwapiService();

  state = {};

  render() {

    const {
      getPerson,
      getStarship,
      getPersonImg,
      getStarshipImg,
      getPlanetImg } = this.swapiService;

    const personDetails = (
      <ItemDetail
        itemId={11}
        getData={getPerson}
        getImageURL={getPersonImg}/>
    );

    const starshipDetails = (
      <ItemDetail
        itemId={5}
        getData={getStarship}
        getImageURL={getStarshipImg} />
    );

    return (
      <div className="container">
        <Header />
        <RamdomPlanet />

        <Row left={personDetails} rigth={starshipDetails} />
      </div>
    );
  }
}
