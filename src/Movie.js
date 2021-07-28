// axios를 통해 가져온 movie list를 렌더링하는 js
import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";
import { Palette } from "color-thief-react";
var colorThiefReact = require("color-thief-react")

// map에 있는 각각의 item은 key값이 필요하다
function Movie({ poster, year, title, subtitle, director, actor, rate }) {
    const imgSrc = poster;
    const Loading = () => <div>Loading...</div>;
    console.log(colorThiefReact);
    console.log(colorThiefReact.getPalette(imgSrc, 5, {crossOrigin: "anonymouse"}));

    const handleOnLoad = () => {
        console.log("load!!");

        <Palette src={imgSrc} crossOrigin="anonymous" format="hex" colorCount={4}>
            {({ data, loading }) => {
                console.log("data = ", data);
                if (loading) return <Loading />;
                return (
                    <div>
                    Palette:
                    <ul>
                        {data.map((color, index) => (
                        <li key={index} style={{ color: color }}>
                            <strong>{color}</strong>
                        </li>
                        ))}
                    </ul>
                    </div>
                );
            }}
        </Palette>
    }

    return (
        <div className="movies">
            <img 
                src={imgSrc}
                alt={title}
                title={title}
                onLoad={handleOnLoad}
            />
            <div className="movies__data">
                <h3 className="movie__title">{title}</h3>
                <h4 className="movie__subtitle">{subtitle}</h4>
                <h5 className="movie__year">{year}</h5>
                <h5 className="movie__director">{director}</h5>
                <h5 className="movie__actor">{actor}</h5>
                <p className="movie__rate">{rate} / 10.00</p>
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
    poster: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    actor: PropTypes.string.isRequired,
    rate: PropTypes.string.isRequired,
}

export default Movie;