import React from 'react';
import './MovieItem.css';
import MovieItem from './MovieItem'

function NowPlayingItem(props){
	return(
		<div className="col-sm-3">
			<MovieItem movie={props.movie} onClick={props.onClick}/>
		</div>
	);
}

export default NowPlayingItem;