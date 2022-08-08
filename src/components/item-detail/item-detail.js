import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";

import "./item-detail.css";

export default class ItemDetail extends Component {
  swapiService = new SwapiService();

  state = {
    image: null,
    item: null,
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
    const { itemId, getData, getImageURL } = this.props;
    if (!itemId) {
      return;
    }
    getData(itemId)
      .then((item) => {
        this.setState({
          image: getImageURL(item),
          item,
          loading: false,
        });
      });
  };

  render() {
    const { item, loading, image} = this.state;

    const spinner = loading ? <Spinner /> : null;
    const content = item ? <RenderItem item={item} img={image} /> : null;

    return (
      <div className="item-details bg-dark card">
        {spinner}
        {content}
      </div>
    );
  }
}

const RenderItem = ({item, img}) => {
  const { name, gender, birthYear, eyeColor } = item;

  return (
    <React.Fragment>
      <img
        className="item-image"
        src={img}
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
