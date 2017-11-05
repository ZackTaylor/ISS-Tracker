import React, { Component } from 'react';
import GoogleMap from 'google-map-react';

import SpaceStation from './SpaceStation';
import shouldPureComponentUpdate from 'react-pure-render/function';
import './Map.css';

class Map extends Component {
  shouldComponentUpdate = shouldPureComponentUpdate;

  handleClick = () => {
    this.props.updateIssPosition();
  };

  render() {
    console.log(this.props.iss.coords);
    return (
      <div className="map">
        <GoogleMap
          bootstrapURLKeys={{ key: 'AIzaSyDtqPWmSSH_XVeYBh5EHPjAG3KRG5_cGIg&libraries=places' }}
          center={[this.props.iss.coords.lat, this.props.iss.coords.lng]}
          zoom={5}
        >
          <SpaceStation {...this.props.iss.coords} />
        </GoogleMap>
        <button onClick={this.handleClick}> update</button>
      </div>
    );
  }
}

export default Map;
