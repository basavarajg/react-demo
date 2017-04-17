import React from 'react';
import ReactDOM from 'react-dom';
//import AwesomeComponent from './AwesomeComponent.jsx';
import Resume from './resume.jsx';

class App extends React.Component {
  render () {
    return (
      <div>
        {/* <AwesomeComponent /> */}
        <Resume />
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('container'));
