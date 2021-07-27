// axios를 통해 가져온 movie list를 렌더링하는 js
import React from "react";
import PropTypes from "prop-types";

function Movie({ id, year, title, summary, poster }) {
    return <h4>{title}</h4>;
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

export default Movie;