import React, { Component } from 'react';
import $ from 'jquery';
import StarRating from './Stars'; // Adjust import path as per your project structure

const apiUrl = 'https://6688a5410ea28ca88b85b20f.mockapi.io/reviews';

class ReviewInput extends Component {
    state = {
        name: '',
        content: '',
        rating: 0,
        movieId: '', // Will store the ID of the movie associated with this review
        loading: true,
        error: null,
        movies: [], // Array to store list of movies (for example, if fetched from an API)
    };

    componentDidMount() {
        // Fetch the list of movies (assuming they have IDs)
        this.fetchMovies();
    }

    fetchMovies = () => {
        // Example: Fetch list of movies from API
        $.get('https://6688a5410ea28ca88b85b20f.mockapi.io/movie')
            .then(movies => {
                this.setState({ movies, loading: false });
            })
            .catch(error => {
                console.error('Error fetching movies:', error);
                this.setState({ error: 'Failed to fetch movie list. Please try again later.', loading: false });
            });
    };

    handleChangeName = (event) => {
        this.setState({ name: event.target.value });
    };

    handleChangeContent = (event) => {
        this.setState({ content: event.target.value });
    };

    handleRatingChange = (rating) => {
        this.setState({ rating });
    };

    handleMovieChange = (event) => {
        const movieId = event.target.value;
        this.setState({ movieId });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { name, content, rating, movieId } = this.state;

        if (!name || !content || rating === 0 || !movieId) {
            alert('Please fill in all fields, select a rating, and choose a movie.');
            return;
        }

        const reviewData = {
            name,
            content,
            movieId,
            rating: `${rating} stars`,
        };

        $.post(apiUrl, reviewData)
            .then(() => {
                this.setState({ name: '', content: '', rating: 0, movieId: '' });
                window.location.reload();
                // Optionally update state or trigger a refresh
            })
            .catch(error => {
                console.error('Error submitting review:', error);
                alert('Failed to submit review. Please try again later.');
            });
    };

    render() {
        const { loading, error, movies, movieId } = this.state;

        if (loading) {
            return <div>Loading...</div>;
        }

        if (error) {
            return <div>Error: {error}</div>;
        }

        return (
            <div className='col-lg'>
                <div className='card'>
                    <div className='card-header'>
                        <h2>Write a Review</h2>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <div className='card-body'>
                            <div>
                                <label>Name:</label>
                                <br />
                                <input
                                    className='form-control'
                                    type="text"
                                    value={this.state.name}
                                    onChange={this.handleChangeName}
                                    required
                                />
                            </div>
                            <br />
                            <div>
                                <label>Review:</label>
                                <br />
                                <textarea
                                    className='form-control'
                                    value={this.state.content}
                                    onChange={this.handleChangeContent}
                                    required
                                />
                            </div>
                            <br />
                            <div>
                                <label>Rating:</label>
                                <br />
                                <StarRating onChange={this.handleRatingChange} />
                            </div>
                            <br />
                            <div>
                                <label>Movie:</label>
                                <br />
                                <select value={movieId} onChange={this.handleMovieChange} className='form-control' required>
                                    <option value="">Select a movie</option>
                                    {movies.map(movie => (
                                        <option key={movie.id} value={movie.id}>{movie.title}</option>
                                    ))}
                                </select>
                            </div>
                            <div>

                            </div>
                        </div>
                            <div className='card-footer'>
                            <button type="submit" className='btn btn-primary'>Submit Review</button>
                        </div>
                    </form>
                    
                </div>
                
            </div>
        );
    }
}

export default ReviewInput;
