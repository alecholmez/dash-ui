require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import PropTypes from 'prop-types';

class Cards extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.formatDates(this.props.builds);
  }

  componentDidUpdate() {
    console.log("Component updated");
    this.formatDates(this.props.builds);
  }

  formatDates(builds) {
    // format dates when they're received
    var options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };

    builds.map((build) => {
      if (build.build_info.stop_time == '') {
        build.build_info.stop_time = 'Pending'
      } else {
        build.build_info.stop_time = new Date(build.build_info.stop_time).toLocaleDateString('en-US', options);
      }

      build.build_info.start_time = new Date(build.build_info.start_time).toLocaleDateString('en-US', options);
    })
  }

  render() {
    return (
      <div className="uk-container uk-container-expand uk-margin-top uk-margin-bottom">
        <h1 className="uk-heading-divider uk-text-center">Decipher's CI/CD Builds</h1>
        <div className="uk-child-width-1-5 uk-flex-center uk-grid-match" data-uk-grid>
          {this.props.builds.map((build, i) => (
            <div key={i}>
              <div className={'uk-tile uk-tile-' + build.build_info.status + ' uk-padding-remove uk-animation-scale-up'}>

                <div className={'uk-tile-header-' + build.build_info.status + ' uk-light uk-padding-small'}>
                  <div className="uk-margin-remove-bottom" data-uk-grid>
                    <div className="uk-width-3-4">
                      <h3 className="uk-text-uppercase uk-margin-remove-bottom">{build.reponame}</h3>
                      <p className="uk-margin-left uk-margin-remove-top uk-margin-remove-bottom uk-text-capitalize uk-margin-remove-left uk-text-small">{build.build_info.branch}</p>
                    </div>
                  </div>
                  <hr/>
                  <div>
                    <p className="uk-text-meta uk-display-inline-block uk-margin-remove-bottom">Time To Complete:
                    </p>
                    <p className="uk-display-inline uk-margin-left uk-margin-remove-top uk-margin-remove-bottom uk-text-capitalize uk-text-small">{build.build_info.stop_time}</p>
                  </div>
                </div>

                <div className="uk-padding-small">
                  <div className="uk-dark">
                    <div className="uk-margin-remove-top">
                      <p className="uk-text-meta uk-display-inline-block">Lifecycle:
                      </p>
                      <p className="uk-display-inline-block uk-margin-left uk-margin-remove-top uk-margin-remove-bottom uk-float-right uk-text-capitalize">{build.build_info.lifecycle}</p>
                    </div>
                    <div className="uk-margin-remove-top">
                      <p className="uk-text-meta uk-display-inline-block">Build Status:
                      </p>
                      <p className="uk-display-inline-block uk-margin-left uk-margin-remove-top uk-margin-remove-bottom uk-float-right uk-text-capitalize">{build.build_info.status}</p>
                    </div>
                    <div className="uk-margin-remove-top">
                      <p className="uk-text-meta uk-display-inline-block">Build Number:
                      </p>
                      <p className="uk-display-inline-block uk-margin-left uk-margin-remove-top uk-margin-remove-bottom uk-float-right">{build.build_info.build_num}</p>
                    </div>
                    <div className="uk-margin-remove-top">
                      <p className="uk-text-meta uk-display-inline-block uk-margin-remove-bottom">Triggered By:
                      </p>
                      <img className="uk-border-circle uk-float-right uk-display-inline-block" src={build.build_info.user.avatar_url} width="40" height="40" alt="Missing Profile"/>
                      <p className="uk-display-inline-block uk-margin-remove-top uk-margin-remove-bottom uk-float-right uk-margin-remove-left">{build.build_info.user.name}</p>
                    </div>
                    <div className="uk-margin-top">
                      <p className="uk-text-meta uk-display-inline-block">Subject:
                      </p>
                      <div className="uk-display-inline-block uk-margin-left uk-margin-remove-top uk-float-right subject-wrap">
                        <p className="uk-margin-remove-top uk-text-small subject-wrap">{build.build_info.subject}</p>
                      </div>
                    </div>
                    <div className="">
                      <p className="uk-text-meta uk-display-inline-block uk-margin-remove-bottom">Language:
                      </p>
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
