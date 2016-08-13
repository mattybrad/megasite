import React from 'react';
import AmbientPlayer from '../AmbientPlayer';

export default class Main extends React.Component {
	render() {
		return (
			<section>
				<div>
        	{this.props.children}
				</div>
        <AmbientPlayer />
			</section>
		)
	}
}
