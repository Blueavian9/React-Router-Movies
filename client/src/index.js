import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movie from './pages/Movie.js';
import MovieCard from './pages/Movie.js';
import MovieList from './pages/Movie.js';
import SavedList from './pages/SavedList.js';
import Server from './pages/server.js';
import './index.css';
import App from './App';


export default function App() {
    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            Route path="Movie.js" element={<Movie.js />} />
            Route path="MovieCard.js" element={<MovieCard.js />} />
            Route path="MovieList.js" element={<MovieList.js />} />
            </Route>
          </Routes>
        </BrowserRouter>
    )
}
// You'll need to wrap <App /> for routing to work
ReactDOM.render(<App />, document.getElementById('root'));
