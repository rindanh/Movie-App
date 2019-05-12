import React, { Component } from 'react';
import './MovieDetail.css';
// import MovieItem from './MovieItem'

class MovieDetail extends Component{
	constructor(props){
		super(props);
		this.state = {
			movie_detail: '',
			movie_genres: [],
			movie_recommendations: [],
		}
	}

	componentDidMount(){
      const api_key = '3e86daa2ef4d6ebc9f48ebb42c59bda6';
      let api = 'https://api.themoviedb.org/3/movie/' + this.props.id + '?api_key=' + api_key;
      let urlFetch = fetch(api)
      urlFetch.then(res =>{
        if(res.status === 200){
          return res.json()
        }
      }).then(resJson => {
        this.setState({
          movie_detail: resJson,
          movie_genres: resJson.genres,
        })
      })
      api = 'https://api.themoviedb.org/3/movie/' + this.props.id + '/similar?api_key=' + api_key;
      urlFetch = fetch(api)
      urlFetch.then(res =>{
        if(res.status === 200){
          return res.json()
        }
      }).then(resJson => {
        this.setState({
          movie_recommendations: resJson.results,
        })
      })
  	}

	render() {
		let image = 'http://image.tmdb.org/t/p/w342' + this.state.movie_detail.poster_path;

		let genres = this.state.movie_genres.map((genre, key)=>
			{
				if (key+1 === this.state.movie_genres.length){
					return genre.name;
				} else {
					return genre.name + ', ';
				}
			}
		)
		let date = new Date(this.state.movie_detail.release_date)
		let year = date.getYear() + 1900;


		return(
			<div className="row">
				<div className="col-sm-4">
					<img src={image} alt={this.state.movie_detail.title}/>
				</div>
				<div className="col-sm-8">
					<h2>{this.state.movie_detail.title}</h2>
					<h5><em>{this.state.movie_detail.tagline}</em></h5>
					<div>Release year: {year}</div>
					<div>Genre: {genres}</div>
					<br/><br/>
					<h4>Overview</h4>
					<div> {this.state.movie_detail.overview} </div>
				</div>
				<br/>
				<h3><br/>Recommendations</h3>
			</div>
		);
	}
}

export default MovieDetail;