import React from 'react';
import MovieItem from './MovieItem'

function SimilarItem(props){
	return(
		<div className="card--content">
			<MovieItem movie={props.movie} onClick={props.onClick}/>
		</div>
	);
}

export default SimilarItem;