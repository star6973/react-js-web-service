// axios를 통해 가져온 movie list를 렌더링하는 js
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Movie.css";

// map에 있는 각각의 item은 key값이 필요하다
function Movie({ poster, year, title, subtitle, director, actor, rate }) {
    return (
        // "/detail" URL이 호출될 경우, state를 보내준다
        <Link to={{
            pathname: "/detail",
            state: { poster, year, title, subtitle, director, actor, rate }
        }}>
            <div className="movie__items">
                <img 
                    src={poster}
                    alt={title}
                    title={title}
                />
                <div className="items__data">
                    <h3 className="items__title">{title}</h3>
                    <h4 className="items__subtitle">{subtitle}</h4>
                    <h5 className="items__year">{year}</h5>
                    <h5 className="items__director">{director}</h5>
                    <h5 className="items__actor">{actor}</h5>
                    <p className="items__rate">{rate} / 10.00</p>
                </div>            
            </div>
        </Link>
    );
}

// 네이버 영화 검색 API로 가져온 데이터의 item
Movie.propTypes = {
    poster: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    actor: PropTypes.string.isRequired,
    rate: PropTypes.string.isRequired,
}

export default Movie;