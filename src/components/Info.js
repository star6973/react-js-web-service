import React from "react";
import PropTypes from "prop-types";
import "./Info.css"

function Info({ poster, year, title, rate }) {
    return (
        <div className="movie__infos">
            <img
                src={poster}
                alt={title}
                title={title}
            />
            <div className="infos__data">
                <h3 className="infos__title">{title}</h3>
                <h3 className="infos__year">{year}</h3>
                <p className="infos__rate">{rate}</p>
            </div>
        </div>
    )
}

Info.propTypes = {
    poster: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    rate: PropTypes.string.isRequired,
}

export default Info;