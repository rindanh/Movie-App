import React, { Component } from 'react';
import MovieItem from './MovieItem'

class NowPlaying extends Component {
  constructor(props){
    super(props)
    this.state = {
      now_playing: [],
    }
  }

  componentDidMount(){
      const api = 'https://api.themoviedb.org/3/movie/now_playing?api_key=3e86daa2ef4d6ebc9f48ebb42c59bda6'
      const urlFetch = fetch(api)
      urlFetch.then(res =>{
        if(res.status === 200){
          return res.json()
        }
      }).then(resJson => {
        this.setState({
          now_playing: resJson.results
        })
      })
  }

  render() {
    const movies = this.state.now_playing.map((movie) =>
      <MovieItem movie={movie} />
    )

    return (
      <div className="container">
        <div className="row">
          <h3>NOW PLAYING</h3>
          <div className="row">{movies}<br/></div>
        </div>
      </div>
    );
  }
}

export default NowPlaying;
