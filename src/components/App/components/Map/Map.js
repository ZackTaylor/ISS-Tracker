import React, { Component } from 'react';
import GoogleMap from 'google-map-react';

import {
  SpaceStation,
} from './components';
import shouldPureComponentUpdate from 'react-pure-render/function';
import './Map.css';

class Map extends Component {
  componentWillMount() {
    this.props.updateIssPosition();
    setInterval(() => {
      this.props.updateIssPosition();
    }, 1500);
  }

  onChildClick = (key, childProps) => {
    this.props.toggleLock();
  };
  _onClick = ({x, y, lat, lng, event}) => console.log(x, y, lat, lng, event)
  shouldComponentUpdate = shouldPureComponentUpdate;

  render() {
    return (
      <div className="map container-full">
        <GoogleMap
          bootstrapURLKeys={{ key: 'AIzaSyDtqPWmSSH_XVeYBh5EHPjAG3KRG5_cGIg' }}
          center={this.props.iss.center}
          zoom={8}
          onChildClick={this.onChildClick}
          onClick={this._onClick}
        >
          <SpaceStation {...this.props.iss.coords} />
        </GoogleMap>
      </div>
    );
  }
}

export default Map;
