import React from 'react';
import {render} from 'react-dom';
import HomePage from './HomePage';
import './style/index.css';

class App extends React.Component {
  render () {
  	return (
	  		<div className="wrapper">
	  			<HomePage/>
	  		</div>
  		);
  	}
}

render(<App/>, document.getElementById('app'));

