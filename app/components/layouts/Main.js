import React from 'react';

export default class Main extends React.Component {
	render() {
		return (
			<section>
				<h1>test</h1>
				<div>
        	{this.props.children}
				</div>
			</section>
		)
	}
}
