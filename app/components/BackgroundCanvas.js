import React from 'react';
import { connect } from 'react-redux';
import _ from 'underscore';
import * as Actions from '../actions/BackgroundActions';

const mapStateToProps = (state) => {
  return {
		primaryColor: state.Background.primaryColor,
		secondaryColor: state.Background.secondaryColor
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    testAction: () => {
      dispatch(Actions.testAction());
    }
  }
}

class BackgroundCanvasComponent extends React.Component {
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
		if(this.state.ctx && this.props.primaryColor && this.props.secondaryColor) {
			var ctx = this.state.ctx;
			ctx.globalAlpha = 0.04;
			for(var i=0;i<3;i++){
				ctx.fillStyle = Math.random()>0.5?this.props.primaryColor:this.props.secondaryColor;
				ctx.beginPath();
				ctx.arc(
					Math.random() * (ctx.canvas.width + 200) - 100,
					Math.random() * (ctx.canvas.height + 200) -100,
					50 + 100 * Math.random(),
					0,
					2 * Math.PI
				);
				ctx.fill();
			}
		}
		window.requestAnimationFrame(this.paint.bind(this));
	}

	render() {
		return (
			<canvas ref="cvs" className="bgCanvas"></canvas>
		)
	}
}

const BackgroundCanvas = connect(
  mapStateToProps,
  mapDispatchToProps
)(BackgroundCanvasComponent);

export default BackgroundCanvas;
