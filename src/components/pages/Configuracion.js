import React, { Fragment, Component } from 'react';
import {Route} from 'react-router-dom';

// Layout Components
import UserProfile from '../layout/UserProfile';

class Configuracion extends Component {
  	constructor(props) {
    	super(props);
    	this.setTransparency = this.setTransparency.bind(this);
  	}

 	componentDidMount() {
    	window.addEventListener('load', this.setTransparency);
        var evt = document.createEvent('Event');  
        evt.initEvent('load', false, false);  
        window.dispatchEvent(evt);
 	}

  	setTransparency() {
		let booleanValue = false;	
    	this.setState({ transparent: booleanValue });
    	this.props.liftStateUp(booleanValue);
  	}

	render() {
  		return (
			<Fragment>
				{/* Position: sticky couldn't work here, so I had to make the navbar class as fixed.
  				* I inserted this div with a height of 66px here for the time being */}
				<div style={{height: '66px'}}></div>
				<UserProfile />
        	</Fragment>
        );
    }
}

export default Configuracion;