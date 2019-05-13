import React from 'react';
import {Link} from 'react-router-dom';

function MovieItem(props) {

	let image = 'http://image.tmdb.org/t/p/w300' + props.movie.poster_path;

	// let titleShortened = props.movie.title.split(" ",10).join("-").toLowerCase();
	let id = String(props.movie.id)
	return(
		<div className="card align-items-center">
			<Link to={id}>
				<img className="card-img-top" src={image} alt={props.movie.title} onClick={props.onClick}/>
			</Link>
			<div className="card-footer text-center" onClick={props.onClick}>
				<Link to={id}>{props.movie.title}</Link>
			</div>
		</div>
	)	
}

export default MovieItem;