import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export class Welcome extends Component {
  render () {
    return (
      <div className='font'>
      <h3>Welcome to the React Programming!</h3>
      </div>
    );
  }
}

ReactDOM.render(<Welcome/>, document.getElementById('index'));
