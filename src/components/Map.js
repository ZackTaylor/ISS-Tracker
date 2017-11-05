import React, { Component } from 'react';
import GoogleMap from 'google-map-react';

import SpaceStation from './SpaceStation';
import shouldPureComponentUpdate from 'react-pure-render/function';
import './Map.css';

class Map extends Component {
  componentWillMount() {
    this.props.updateIssPosition();
    setInterval(() => {
      this.props.updateIssPosition();
    }, 1500);
  }

  shouldComponentUpdate = shouldPureComponentUpdate;

  render() {
    return (
      <div className="map container-full">
        <GoogleMap
          bootstrapURLKeys={{ key: 'AIzaSyDtqPWmSSH_XVeYBh5EHPjAG3KRG5_cGIg' }}
          center={this.props.iss.center || [0, 0]}
          zoom={8}
        >
          <SpaceStation {...this.props.iss.coords} />
        </GoogleMap>
      </div>
    );
  }
}

export default Map;
