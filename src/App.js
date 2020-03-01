import React from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import { buyItem, removeFeature } from './actions/carFeaturesActions';

const App = ({ buyItem, removeFeature }) => {


  // const removeFeature = (item) => {
  //   // dispatch an action here to remove an item
  //   dispatchEvent({ type: "REMOVE_FEATURE", payload: item })
  // };

  // const buyItem = item => {
  //   // dipsatch an action here to add an item
  //   dispatchEvent({ type: "BUY_ITEM", payload:item })
  // };

  return (
    <div className="boxes">
      <div className="box">
        <Header  />
        <AddedFeatures removeFeature={removeFeature}  />
      </div>
      <div className="box">
        <AdditionalFeatures buyItem={buyItem}  />
        <Total />
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  buyItem,
  removeFeature
};

export default connect(null, mapDispatchToProps)(App);
