import React, { Component } from 'react';
import GoogleMap from 'google-map-react';

import SpaceStation from './SpaceStation';
import shouldPureComponentUpdate from 'react-pure-render/function';
import './Map.css';

export default class Map extends Component {
  shouldComponentUpdate = shouldPureComponentUpdate;

  render() {
    return (
      <div className="map">
        <GoogleMap
          bootstrapURLKeys={{ key: 'AIzaSyDtqPWmSSH_XVeYBh5EHPjAG3KRG5_cGIg&libraries=places' }}
          center={[41.881832, -87.62317]}
          zoom={11}
        >
          <SpaceStation lat={41.881832} lng={-87.62317} />
        </GoogleMap>
      </div>
    );
  }
}
