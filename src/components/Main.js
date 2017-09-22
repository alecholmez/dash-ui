require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Error from './Error';
import Cards from './Cards';

class AppComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      builds: []
    };
  }

  manageWS(url) {
    var connection = new WebSocket(url);

    connection.onopen = function() {
      console.log('Connection Established');
    };
    connection.onmessage = (e) => {
      console.log('Message Recieved: ');
      var res = JSON.parse(e.data);
      console.log(res.builds);

      this.setState({
        builds: res.builds
      });
      connection.onclose = (e) => {
        console.log('Connection Closed!');
        this.setState({
          buffer: null
        })
        console.log(e.reason);

      };
      connection.onerror = function(e) {
        console.log(e.message);
      }
    }
  }

  componentWillMount() {
    console.log('Establishing connection to GoDash...');
    this.manageWS('ws://localhost:8080/dash');
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
          <Error message={'Could not fetch builds!'}/>
        </div>
      );
    }

  }
}

AppComponent.defaultProps = {};

export default AppComponent;