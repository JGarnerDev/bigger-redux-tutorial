import React, { Component } from "react";
import { connect } from "react-redux";
import { movieslist, directorslist } from "../actions";
import { bindActionCreators } from "redux";

import MoviesList from "../components/MoviesList";
import DirectorsList from "../components/DirectorsList";

class App extends Component {
	componentDidMount() {
		this.props.movieslist();
		this.props.directorslist();
	}

	render() {
		return (
			<div>
				<MoviesList {...this.props} />
				<DirectorsList {...this.props} />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		data: state.movies,
	};
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(
		{
			movieslist,
			directorslist,
		},
		dispatch
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
