import React from 'react';
import './MovieItem.css';
import NowPlayingItem from './NowPlayingItem'

function MovieItem(props){
	return(
		<div className="col-sm-3">
			<NowPlayingItem movie={props.movie}/>
		</div>
	);
}

export default MovieItem;