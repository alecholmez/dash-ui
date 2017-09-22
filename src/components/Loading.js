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
      <div className="uk-flex uk-margin uk-text-center" data-uk-height-viewport>
        <div className="uk-margin-auto uk-margin-auto-vertical uk-width-1-2@s">
          <h1 className="uk-heading-primary">{this.props.message}</h1>
          <div data-uk-spinner={'ratio: 2'}></div>
        </div>
      </div>
    );
  }
}

Error.propTypes = {
  message: PropTypes.string
};

Error.defaultProps = {
  message: 'Loading...'
};

export default Error;
