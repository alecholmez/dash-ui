require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import PropTypes from 'prop-types';

class Error extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="uk-container uk-container-expand uk-margin-top">
        <h1 className="uk-heading-divider">Decipher's CircleCI Builds</h1>
        <div className="uk-alert uk-alert-danger" data-uk-alert>{this.props.message}</div>
      </div>
    );
  }
}

Error.propTypes = {
  message: PropTypes.string
};

Error.defaultProps = {
  message: ''
};

export default Error;
