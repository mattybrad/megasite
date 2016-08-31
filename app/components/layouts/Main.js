import React from 'react';
import AmbientPlayer from '../AmbientPlayer';
import BackgroundCanvas from '../BackgroundCanvas';
import Menu from '../Menu';

export default class Main extends React.Component {
	render() {
		return (
			<div>
				<div className="foreground">
					<div className="section hero">
						<div className="container">
							<div className="row">
                <div className="full-width column">
                  <Menu />
			        	  {this.props.children}
                </div>
							</div>
						</div>
					</div>
				</div>
				<AmbientPlayer play={false} />
				<BackgroundCanvas />
			</div>
		)
	}
}
