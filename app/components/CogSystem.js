import React from 'react';
import _ from 'underscore';
import CogSquare from './CogSquare';

export default class CogSystem extends React.Component {
	render() {
		return (
			<table>
				{_.range(0,this.props.height).map(function(i){
					return(
						<tr>
							{_.range(0,this.props.width).map(function(j){
								return(
									<td>
										<CogSquare />
									</td>
								)
							})}
						</tr>
					)
				}.bind(this))}
			</table>
		)
	}
}
