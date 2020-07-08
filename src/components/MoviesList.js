import React from "react";

const MoviesList = (props) => {
	const renderMovies = (movies) =>
		movies
			? movies.map((item, i) => (
					<div key={i}>
						<div>{item.id} </div>
						<div>{item.name}</div>
					</div>
			  ))
			: null;

	return <div>{renderMovies(props.data.movies)}</div>;
};

export default MoviesList;
