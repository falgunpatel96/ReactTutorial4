import React from 'react';
import logo from './logo.svg';
import './App.css';
import AutoCompleteText from './AutoCompleteText';
import friends from './friends'
import MovieInfo from './MovieInfo'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function Main() {
  return (
    <div className="App">
      <div className="App-Component">
        <AutoCompleteText items={friends} />
      </div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <Route path="/movie-info/:show_id" exact component={MovieInfo} />
      <Route path="/" exact component={Main} />
    </Router>


  );
}

export default App;
