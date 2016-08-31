import React from 'react';
import _ from 'underscore';

export default class BackgroundCanvas extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	componentDidMount() {
		this.initCanvas();
		window.requestAnimationFrame(this.paint.bind(this));
		window.addEventListener('resize', this.initCanvas.bind(this));
	}

	initCanvas() {
		var ctx = this.refs.cvs.getContext("2d");
		ctx.canvas.width = window.innerWidth;
		ctx.canvas.height = window.innerHeight;
		this.setState({
			ctx: ctx
		})
	}

	paint() {
		if(this.state.ctx) {
			var ctx = this.state.ctx;
			ctx.fillStyle = "rgba(255,255,255,0.1)";
			ctx.fillRect(Math.random() * ctx.canvas.width, Math.random() * ctx.canvas.height, 150, 150);
		}
		window.requestAnimationFrame(this.paint.bind(this));
	}

	render() {
		return (
			<canvas ref="cvs" className="bgCanvas"></canvas>
		)
	}
}
