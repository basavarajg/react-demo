import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import GoogleMapReact from 'google-map-react';



const apiKey='AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo';
const props = {
  center: {lat: 16.784820, lng: 77.353363},
  zoom: 5
};

export class Maps extends Component {

  render () {
    return (
      <div className='maps'>
        <GoogleMapReact
          defaultCenter={props.center}
          defaultZoom={props.zoom}
        />
      </div>
    );
  }
}

ReactDOM.render(<Maps/>, document.getElementById('maps'));
