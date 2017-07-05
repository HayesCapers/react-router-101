import React, { Component } from 'react';
import $ from 'jquery';


class Movie extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movie: {}
		}
	}

	componentDidMount() {
		const mid = this.props.match.params.movieId
		$.getJSON(`https://api.themoviedb.org/3/movie/${mid}?api_key=fec8b5ab27b292a68294261bb21b04a5`, (movie) =>{
			console.log(movie);
			this.setState({
				movie: movie
			})
		});
	}

	// You can also use componenetWillRecieveProps interchangably with componentWillUpdate
	componentWillReceiveProps(nextProps) {
		// console.log(nextProps)
		const anotherMovieId = nextProps.match.params.movieId
		$.getJSON(`https://api.themoviedb.org/3/movie/${anotherMovieId}?api_key=fec8b5ab27b292a68294261bb21b04a5`, (movie) =>{
			this.setState({
				movie: movie
			});
		});
	}
	// Params are inside props.match
	// console.log(props.match);
	render(){
		if (this.state.movie === {}) {
			return(
				<h1>movieHere</h1>
			)
		}	
		return(
			<div className='col-sm-8'>
				<h1>{this.state.movie.title}</h1>
			</div>	
		)			
	}
}

export default Movie;