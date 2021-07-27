// axios를 통해 가져온 movie list를 렌더링하는 js
import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

// map에 있는 각각의 item은 key값이 필요하다
function Movie({ year, title, subtitle, director, rate, poster }) {
    return (
        <div className="movies">
            <img src={poster} alt={title} title={title} />
            <div className="movies__data">
                <h3 className="movie__title">{title}</h3>
                <h4 className="movie__subtitle">{subtitle}</h4>
                <h5 className="movie__year">{year}</h5>
                <h5 className="movie__director">{director}</h5>
                <p className="movie__rate">{rate}</p>
            </div>
        </div>
    );
}

// YTS API로 가져온 데이터의 item
// Movie.propTypes = {
//     id: PropTypes.number.isRequired,
//     year: PropTypes.number.isRequired,
//     title: PropTypes.string.isRequired,
//     summary: PropTypes.string.isRequired,
//     poster: PropTypes.string.isRequired,
//     genres: PropTypes.arrayOf(PropTypes.string).isRequired
// }

// 네이버 영화 검색 API로 가져온 데이터의 item
Movie.propTypes = {
    year: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    rate: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

export default Movie;