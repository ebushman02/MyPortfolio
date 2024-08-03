import React from 'react';
import $ from 'jquery';
import Movie from './movie';
import ReviewInput from './review-form';
import AddMovieForm from './add-movie-form';
import ReturnButton from '../return-home-btn';



const apiUrl = 'https://6688a5410ea28ca88b85b20f.mockapi.io/movie';

class MovieList extends React.Component {
    state = {
        movies: [],
    };
// Create movies state and props
    componentDidMount() {
        Movie.getMovie().then(movies => {
            this.setState({ movies });
        });
    }
render(){
    // render movies in in bootstrap grid stuff and display it based on id
    return (
        <div>
            <ReturnButton />
        <div className='row'>
            
        </div>
        <br/>
        <div className='row'>   
           <div className='col-sm'> 
        {this.state.movies.map(movie => (
            <Movie key={movie.id} movie={movie} />
            
        ))
        }
        
       
        </div>
        <br />
        <div className='col-sm'>
            <ReviewInput />
            <br/>
            <AddMovieForm />
        </div>
        </div>
        <br />
        </div>
    );
}
};

export default MovieList

