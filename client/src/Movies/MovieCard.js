import React from "react";

const MovieCard = (props) => {
  // Ensure that props.movie.stars is an array, and provide an empty array as a fallback if it's not defined.
  const stars = Array.isArray(props.movie.stars) ? props.movie.stars : [];

  return (
    <div className="movie-card">
      <h2>{props.movie.title}</h2>
      <div className="movie-director">
        Director: <em>{props.movie.director}</em>
      </div>
      <div className="movie-movie-card">
        MovieCard: <strong>{props.movie.movie - MovieCard.js}</strong>
      </div>
      <h3>Actors</h3>

      {stars.map((star) => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </div>
  );
};

export default MovieCard;

// My Original Code
// import React from "react";

// const MovieCard = (props) => {
//   return (
//     <div className="movie-card">
//       <h2>{props.movie.title}</h2>
//       <div className="movie-director">
//         Director: <em>{props.movie.director}</em>
//       </div>
//       <div className="movie-movie-card">
//         Metascore: <strong>{props.movie.metascore}</strong>
//       </div>
//       <h3>Actors</h3>

//       {props.movie.stars.map((star) => (
//         <div key={star} className="movie-star">
//           {star}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MovieCard;
