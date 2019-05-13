import React, { Component } from 'react';
import './App.css';
import {Route, Switch, Link} from 'react-router-dom';
import MovieDetail from './MovieDetail'
import NowPlaying from './NowPlaying'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      movie_selected: '',
    }
    this.handleMovieSelected = this.handleMovieSelected.bind(this)
  }

  handleMovieSelected(data) {
    this.setState({
      movie_selected: data
    })
  } 

  render() {
    // let titleShortened = props.movie.title.split(" ",10).join("-").toLowerCase();
    return (
      <div className="container">
        <header className="text-center">
          <h1><Link to="/">MOVIE APP</Link></h1>
        </header>
        <Switch>
          <Route exact path="/" render={(props) => <NowPlaying movie_selected={this.handleMovieSelected} />} />
          <Route path="/:handle" render={(props) => <MovieDetail id={this.state.movie_selected} /> } />
        </Switch>
      </div>
    );
  }
}

export default App;
