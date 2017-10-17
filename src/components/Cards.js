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
        <div className="uk-child-width-1-5@xl uk-child-width-1-4@l uk-child-width-1-3@m uk-child-width-1-2@s uk-flex-center uk-grid-match" data-uk-grid>
          {this.props.builds.map((build, i) => (
            <div key={i}>
              <div className={'uk-tile uk-tile-' + build.build_info.status + ' uk-padding-remove uk-animation-scale-up'}>

                <div className={'uk-tile-header-' + build.build_info.status + ' uk-light uk-padding-small'}>
                  <div className="uk-margin-remove-bottom" data-uk-grid>
                    <div className="uk-width-3-4">
                      <h3 className="uk-text-uppercase uk-margin-remove-bottom">{build.reponame}</h3>
                      <p className="uk-margin-left uk-margin-remove-top uk-margin-remove-bottom uk-text-capitalize uk-margin-remove-left uk-text-small">{build.build_info.branch}</p>
                    </div>
                    <div className="uk-width-1-4 uk-text-right">
                      {build.build_info.status == 'success' && <span className="uk-text-middle" data-uk-icon="icon: check; ratio: 1"></span>}
                      {build.build_info.status == 'fixed' && <span className="uk-text-middle" data-uk-icon="icon: check; ratio: 1"></span>}
                      {build.build_info.status == 'pending' && <div data-uk-spinner={'ratio: 1'}></div>}
                      {build.build_info.status == 'failed' && <span className="uk-text-middle" data-uk-icon="icon: close; ratio: 1"></span>}
                      {build.build_info.status == 'no_tests' && <span className="uk-text-middle" data-uk-icon="icon: check; ratio: 1"></span>}
                      {build.build_info.status == 'timedout' && <span className="uk-text-middle" data-uk-icon="icon: check; ratio: 1"></span>}
                    </div>
                  </div>
                  <hr/>
                  <div data-uk-grid>
                    <div className="uk-width-1-3">
                      <p className="uk-text-meta uk-margin-remove-bottom">{'Completed:'}</p>
                    </div>
                    <div className="uk-width-2-3">
                      <p className="uk-text-right uk-margin-remove-top uk-margin-remove-bottom uk-text-capitalize uk-text-small">{build.build_info.stop_time}</p>
                    </div>
                  </div>
                </div>

                <div className="uk-padding-small">
                  <div className="uk-dark">
                    <div className="uk-margin-remove-top">
                      <p className="uk-text-meta uk-display-inline-block">{'Lifecycle'}</p>
                      <p className="uk-display-inline-block uk-margin-left uk-margin-remove-top uk-margin-remove-bottom uk-float-right uk-text-capitalize">{build.build_info.lifecycle}</p>
                    </div>
                    <div className="uk-margin-remove-top">
                      <p className="uk-text-meta uk-display-inline-block">{'Build Status'}</p>
                      <p className="uk-display-inline-block uk-margin-left uk-margin-remove-top uk-margin-remove-bottom uk-float-right uk-text-capitalize">{build.build_info.status}</p>
                    </div>
                    <div className="uk-margin-remove-top">
                      <p className="uk-text-meta uk-display-inline-block">{'Build Number'}</p>
                      <p className="uk-display-inline-block uk-margin-left uk-margin-remove-top uk-margin-remove-bottom uk-float-right">{build.build_info.build_num}</p>
                    </div>
                    <div className="uk-margin-remove-top">
                      <p className="uk-text-meta uk-display-inline-block uk-margin-remove-bottom">{'Triggered By'}</p>
                      <div className="uk-margin-remove-top uk-margin-remove-bottom uk-display-inline-block uk-float-right">
                        <span className="uk-margin-small-right uk-text-middle">{build.build_info.user.name}</span>
                        <img className="uk-border-circle" src={build.build_info.user.avatar_url} width="30" height="30" alt="Missing Profile"/>
                      </div>
                    </div>
                    <div className="uk-margin-top">
                      <p className="uk-text-meta uk-display-inline-block">{'Subject'}</p>
                      <div className="uk-display-inline-block uk-margin-left uk-margin-remove-top uk-float-right subject-wrap">
                        <p className="uk-margin-remove-top uk-text-small subject-wrap">{build.build_info.subject}</p>
                      </div>
                    </div>
                    <div className="">
                      <p className="uk-text-meta uk-display-inline-block uk-margin-remove-bottom">{'Language'}</p>
                      <p className="uk-display-inline-block uk-margin-left uk-margin-remove-top uk-margin-remove-bottom uk-float-right">{build.language}</p>
                    </div>
                  </div>
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
