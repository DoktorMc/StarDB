import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";

import "./people-detail.css";

export default class PeopleDetail extends Component {
  SwapiService = new SwapiService();

  state = {
    person: null,
    loading: true,
  };

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (this.props.personId !== prevProps.personId) {
      this.updatePerson();
    }
  }

  updatePerson = () => {
    const { personId } = this.props;
    if (!personId) {
      return;
    }
    this.SwapiService.getPerson(personId)
      .then((person) => {
        this.setState({
          person,
          loading: false,
        });
      });
  };

  render() {
    const { person, loading} = this.state;

    const spinner = loading ? <Spinner /> : null;
    const content = person ? <RenderPerson person={person} /> : null;

    return (
      <div className="person-details bg-dark card">
        {spinner}
        {content}
      </div>
    );
  }
}

const RenderPerson = ({person}) => {
  const { id, name, gender, birthYear, eyeColor } = person;

  return (
    <React.Fragment>
      <img
        className="person-image"
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
      />
      <div className="card-body">
        <h4>{name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Gender: </span>
            <span>{gender}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Birth Year: </span>
            <span>{birthYear}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Eye Color: </span>
            <span>{eyeColor}</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};
