import React from 'react';
import {Link} from 'react-router-dom';

function NowPlayingItem(props) {

	let image = 'http://image.tmdb.org/t/p/w300' + props.movie.poster_path;

	return(
		<div className="card align-items-center">
			<Link to="movie-detail">
				<img className="card-img-top" src={image} />
			</Link>
			<div className="card-footer text-center">
				<Link to="movie-detail">{props.movie.title}</Link>
			</div>
		</div>
	)
}

export default NowPlayingItem;