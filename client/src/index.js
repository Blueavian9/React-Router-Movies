import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Movie from './pages/Movie.js';
import MovieCard from './pages/MovieCard.js';
import MovieList from './pages/MovieList.js';
import SavedList from './pages/SavedList.js';
import Server from './pages/server.js';
import'./index.css';
import App from './components/App/App';

export default App() { 
  return (
    <div className="wrapper">
       <h1>App</h1>
    
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
 </div>
  );

// You'll need to wrap <App /> for routing to work
const root = ReactDOM.createRoot(root.render(<App />, document.getElementById('root')));
}
