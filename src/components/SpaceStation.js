import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shouldPureComponentUpdate from 'react-pure-render/function';

import './SpaceStation.css';

export default class MyGreatPlace extends Component {
  static propTypes = {
    text: PropTypes.string
  };
  static defaultProps = {};
  shouldComponentUpdate = shouldPureComponentUpdate;
  render() {
    return (
      <div className="iss">
        <img src={require('../images/iss.png')} alt="iss" />
      </div>
    );
  }
}
