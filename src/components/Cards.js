require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import PropTypes from 'prop-types';

class Cards extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="uk-container uk-container-expand uk-margin-top uk-margin-bottom">
          <h1 className="uk-heading-divider uk-text-center">Decipher's CI/CD Builds</h1>
          <div className="uk-child-width-1-5 uk-flex-center uk-grid-match" data-uk-grid>
              {this.props.builds.map((build,i) => (
                  <div key={i}>
                      <div className={'uk-tile uk-tile-' + build.build_info.status +  ' uk-light uk-padding uk-animation-scale-up'}>
                          <div data-uk-grid>
                              <div className="uk-width-3-4">
                                  <h3 className="uk-text-uppercase uk-display-inline-block uk-margin-remove-bottom">{build.reponame}</h3>
                              </div>
                          </div>
                          <hr />
                          <div className="uk-margin-remove-top">
                              <p className="uk-text-meta uk-display-inline-block">Lifecycle: </p>
                              <p className="uk-display-inline-block uk-margin-left uk-margin-remove-top uk-margin-remove-bottom uk-float-right uk-text-capitalize">{build.build_info.lifecycle}</p>
                          </div>
                          <div className="uk-margin-remove-top">
                              <p className="uk-text-meta uk-display-inline-block">Build Status: </p>
                              <p className="uk-display-inline-block uk-margin-left uk-margin-remove-top uk-margin-remove-bottom uk-float-right uk-text-capitalize">{build.build_info.status}</p>
                          </div>
                          <div className="uk-margin-remove-top">
                              <p className="uk-text-meta uk-display-inline-block">Build Number: </p>
                              <p className="uk-display-inline-block uk-margin-left uk-margin-remove-top uk-margin-remove-bottom uk-float-right">{build.build_info.build_num}</p>
                          </div>
                          <div className="uk-margin-remove-top">
                              <p className="uk-text-meta uk-display-inline-block">Branch: </p>
                              <p className="uk-display-inline-block uk-margin-left uk-margin-remove-top uk-margin-remove-bottom uk-float-right uk-text-capitalize uk-margin-remove-left">{build.build_info.branch}</p>
                          </div>
                          <div className="uk-margin-remove-top">
                              <p className="uk-text-meta uk-display-inline-block">Triggered By: </p>
                              <img className="uk-border-circle uk-float-right uk-display-inline-block" src={build.build_info.user.avatar_url} width="40" height="40" alt="Missing Profile"/>
                              <p className="uk-display-inline-block uk-margin-remove-top uk-margin-remove-bottom uk-float-right uk-margin-remove-left">{build.build_info.user.name}</p>
                          </div>
                          <hr />
                          <div className="uk-margin-remove-bottom">
                              <p className="uk-text-meta uk-display-inline-block uk-margin-remove-bottom">Subject: </p>
                              <div className="uk-display-inline-block uk-margin-left uk-margin-remove-top uk-margin-remove-bottom uk-float-right subject-wrap">
                                  <p className=" uk-margin-remove-bottom uk-margin-remove-top">{build.build_info.subject}</p>
                              </div>
                          </div>
                          <div className="uk-margin-remove-bottom">
                              <p className="uk-text-meta uk-display-inline-block uk-margin-remove-bottom">Language: </p>
                              <p className="uk-display-inline-block uk-margin-left uk-margin-remove-top uk-margin-remove-bottom uk-float-right">{build.language}</p>
                          </div>
                      </div>
                  </div>
              ))}
          </div>
        </div>
    );
  }
}

Cards.propTypes = {
  builds: PropTypes.array
};

Cards.defaultProps = {
  builds: []
};

export default Cards;
