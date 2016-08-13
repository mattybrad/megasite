import React from 'react';

export default class Main extends React.Component {
	render() {
		return (
			<section>
				<div>
        	{this.props.children}
				</div>
			</section>
		)
	}
}
