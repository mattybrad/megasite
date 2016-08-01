import React from 'react';

export default class Main extends React.Component {
	render() {
		return (
			<section className="section">
				<div className="container">
        	{this.props.children}
				</div>
			</section>
		)
	}
}
