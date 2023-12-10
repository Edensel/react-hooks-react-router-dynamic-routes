import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavBar from './NavBar';
import MoviesPage from './MoviesPage';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
        <Route path="/movies">
          <MoviesPage />
        </Route>
        <Route exact path="/">
          <div>Home</div>
        </Route>
    </BrowserRouter>
  );
}

export default App;
