import React from 'react';
import AmbientPlayer from '../AmbientPlayer';
import Menu from '../Menu';

export default class Main extends React.Component {
	render() {
		return (
			<div className="section hero">
				<div className="container">
					<Menu className="row" />
					<div className="row">
	        	{this.props.children}
					</div>
				</div>
        <AmbientPlayer play={false} />
			</div>
		)
	}
}
