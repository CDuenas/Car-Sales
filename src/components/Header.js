import React from 'react';
import { connect } from "react-redux";

const Header = props => {
  return (
    <>
      <figure className="image is-128x128">
        <img src={props.image} alt={props.name} />
      </figure>
      <h2>{props.name}</h2>
      <p>Amount: ${props.price}</p>
    </>
  );
};

const mapStateToProps = state => {
  return {
    price: state.carReducer.price,
    name: state.carReducer.name,
    image: state.carReducer.image
  }
}

export default connect(mapStateToProps, {})(Header);
