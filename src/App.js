import React, { Component } from 'react';
import './App.css';
import {Route, Switch, Link} from 'react-router-dom';
import MovieDetail from './MovieDetail'
import NowPlaying from './NowPlaying'

class App extends Component {
  // constructor(props){
  //   super(props)
  // }

  render() {
    return (
      <div className="container">
        <header className="text-center">
          <h1><Link to="/">MOVIE APP</Link></h1>
        </header>
        <Switch>
          <Route exact path="/" render={(props) => <NowPlaying />} />
          <Route path="/movie-detail" render={(props) => <MovieDetail id="299534" /> } />
        </Switch>
      </div>
    );
  }
}

export default App;
