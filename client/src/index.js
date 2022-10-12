import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movie from './pages/Movie.js';
import MovieCard from './pages/Movie.js';
import MovieList from './pages/Movie.js';
import SavedList from './pages/SavedList.js';
import Server from './pages/server.js';
import './index.css';
import App from './pages/App';


export default App(); {
  return (
    <div className="wrapper">
        <h1>App</h1>
    </div>
  );
}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="Movie.js" element={<Movie.js />} />
        <Route path="MovieCard.js" element={<MovieCard.js />} />
        <Route path="MovieList.js" element={<MovieList.js />} />
        <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

// You'll need to wrap <App /> for routing to work

const root = ReactDOM.createRoot(root.render(<App />, document.getElementById('root')));
