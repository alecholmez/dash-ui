require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Loading from './Loading';
import Cards from './Cards';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      builds: []
    };
  }

  formatDates(builds) {
    // format dates when they're received
    var options = {
      year: 'numeric',
      month: 'short',
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

    return builds
  }

  manageWS(url) {
    var connection = new WebSocket(url);

    connection.onopen = function() {
      console.log('Connection Established');
    };
    connection.onmessage = (e) => {
      var res = JSON.parse(e.data);
      var builds = this.formatDates(res.builds);

      this.setState({builds: builds});
      connection.onclose = (e) => {
        console.log('Connection Closed!');
        console.log(e.reason);

      };
      connection.onerror = function(e) {
        console.log(e.message);
      }
    }
  }

  componentWillMount() {
    console.log('Establishing connection to GoDash...');
    this.manageWS('ws://decipher-dash.herokuapp.com/dash');
  }

  render() {
    if (this.state.builds.length > 0) {
      return (
        <div>
          <Cards builds={this.state.builds}/>
        </div>
      );
    } else {
      return (
        <div data-uk-height-viewport>
          <Loading/>
        </div>
      );
    }

  }
}

AppComponent.defaultProps = {};

export default AppComponent;
