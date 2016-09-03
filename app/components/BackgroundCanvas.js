import React from 'react';
import { connect } from 'react-redux';
import _ from 'underscore';
import * as Actions from '../actions/BackgroundActions';

const mapStateToProps = (state) => {
  return {
		primaryColor: state.Background.primaryColor,
		secondaryColor: state.Background.secondaryColor,
    active: state.Background.active
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
		this.startAnimation();
		window.addEventListener('resize', this.resizeCanvasIfMuchDifferent.bind(this));
	}

  componentDidUpdate(prevProps, prevState) {
    if(!this.props.active && prevProps.active) {
      this.setState({
        ctx: null
      })
    }
    if(this.props.active && !prevProps.active) {
      this.initCanvas();
  		this.startAnimation();
    }
  }

  startAnimation() {
    window.requestAnimationFrame(this.paint.bind(this));
  }

  resizeCanvasIfMuchDifferent() {
    if(this.props.active) {
      var style = window.getComputedStyle(ctx.canvas);
      // boring, do this later
    }
  }

	initCanvas() {
		var ctx = this.refs.cvs.getContext("2d");
    var style = window.getComputedStyle(ctx.canvas);
		ctx.canvas.width = parseInt(style.width);
		ctx.canvas.height = parseInt(style.height);
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
			this.props.active ? <canvas ref="cvs" className="bgCanvas"></canvas> : null
		)
	}
}

const BackgroundCanvas = connect(
  mapStateToProps,
  mapDispatchToProps
)(BackgroundCanvasComponent);

export default BackgroundCanvas;
