import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import nba from './nba';
import $ from 'jquery';
import Movie from './Movie';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			gists: []
		}	
	}

	componentDidMount() {
		$.getJSON('https://api.themoviedb.org/3/search/movie?api_key=fec8b5ab27b292a68294261bb21b04a5&query=superman', (clams) => {
			this.setState({
				gists: clams.results
			})
		});
	}

	render() {
		if (this.state.gists.length === 0){
			return(<h1>Loading...</h1>)
		}
		// this is a local variable. Not the same as this.state.gists
		const localGists = [];
		this.state.gists.map((gist, index) => {
			localGists.push(
				<div key={index}>
					<Link to={`/g/${gist.id}`}>
						{gist.title}
					</Link>
				</div>
			)
		})
		/* the router goes around everything the router needs to change */
		return (
			<Router>
				<div className='container'>
					<h1>Gists N Such</h1>
					<Route path='/nba' component={nba} />
					<div className='movie-list col-sm-6'>
						{localGists}
					</div>
					<div className='col-sm-6'>
						<Route path='/g/:movieId' component={Movie} />
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
