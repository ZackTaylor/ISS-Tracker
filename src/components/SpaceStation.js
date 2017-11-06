import React from 'react';

import './SpaceStation.css';

const SpaceStation = () => (
  <div className="iss">
    <p className="title">Click the ISS toggle lock on</p>
    <img src={require('../images/iss.png')} alt="iss" />
  </div>
);

export default SpaceStation;
