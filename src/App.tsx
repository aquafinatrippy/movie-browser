import React from 'react';
import './App.css';
import {Header} from "./components/Header";
import {useDispatch} from "react-redux";
import {getGenres, getMoviesPopular} from "./features/movies/MoviesSlice";
import {MoviesList} from "./components/MoviesList";
import {Footer} from "./components/Footer";

function App() {
    const dispatch = useDispatch()
    dispatch(getGenres())
    dispatch(getMoviesPopular())
  return (
    <div className="App">
      <Header/>
      <MoviesList/>
      <Footer/>
    </div>
  );
}

export default App;
