import React from 'react';
import $ from 'jquery'; // Import jQuery for AJAX calls
import ReviewList from './review-list'; // Assuming ReviewList component exists
import AddMovieForm from './add-movie-form'; // Assuming AddMovieForm component exists

export default class Movie extends React.Component {
    static url = 'https://6688a5410ea28ca88b85b20f.mockapi.io/movie';

    // Static method to get all movies
    static getMovie() {
        return $.get(this.url);
    }

    // Static method to create a new movie
    static createMovie(title, runtime, rating, cover) {
        return $.post(this.url, { title, runtime, rating, cover });
    }

    // Static method to update an existing movie
    static updateMovie(id, newTitle, newRuntime, newRating, newCover) {
        return $.ajax({
            url: `${this.url}/${id}`,
            type: 'PUT',
            data: JSON.stringify({ title: newTitle, runtime: newRuntime, rating: newRating, cover: newCover }),
            contentType: 'application/json',
        });
    }

    // Static method to delete a movie and associated reviews
    static deleteMovie(id) {
        return $.ajax({
            url: `${this.url}/${id}`,
            type: 'DELETE',
        });
    }

    // Static method to delete reviews associated with a movie
    static deleteReviewsForMovie(movieId) {
        // Example API endpoint for deleting reviews associated with a movie
        const reviewsUrl = `https://6688a5410ea28ca88b85b20f.mockapi.io/reviews`;

        return $.get(reviewsUrl)
            .then((reviews) => {
                // Filter reviews by movieId
                const filteredReviews = reviews.filter((review) => review.movieId === movieId);

                // Delete each filtered review
                const deletePromises = filteredReviews.map((review) => {
                    return $.ajax({
                        url: `${reviewsUrl}/${review.id}`,
                        type: 'DELETE',
                    });
                });

                // Return a Promise that resolves when all reviews are deleted
                return Promise.all(deletePromises);
            })
            .catch((error) => {
                console.error('Error deleting reviews:', error);
                throw error; // Propagate the error
            });
    }

    constructor(props) {
        super(props);
        this.state = {
            newTitle: '',
            newRuntime: '',
            newRating: '',
            newCover: '',
        };
        // Binding deleteMovie method to this instance
        this.deleteMovie = this.deleteMovie.bind(this);
    }

    // Method to handle movie deletion
    deleteMovie() {
        const { movie } = this.props;
        const { id } = movie;

        // First, delete reviews associated with the movie
        Movie.deleteReviewsForMovie(id)
            .then(() => {
                // Then, delete the movie itself
                return Movie.deleteMovie(id);
            })
            .then(() => {
                console.log(`Movie with ID ${id} and associated reviews deleted successfully.`);
                // Optionally, perform actions after deletion (e.g., refresh movie list)
                // this.props.onMovieDeleted(id); // Pass a callback prop if needed
            })
            .catch((error) => {
                console.error('Error deleting movie and reviews:', error);
                // Handle error scenario
                alert('Failed to delete movie and associated reviews.');
            })
            .then(() => {
                window.location.reload(); // Refresh the page after deletion
            });
    }

    render() {
        const { movie } = this.props;

        return (
            <div>
                <div className='row'>
                    <div className='col-lg'>
                        <div className='card'>
                            <div className='card-header'>
                                <h2>{movie.title}</h2>
                            </div>
                            <div className='card-body'>
                                <div display='inline'>
                                    <img src={movie.cover} alt='Cover' width='25%' align='right' display='inline' />
                                </div>
                                <div>
                                    <strong>Runtime:</strong> {movie.runtime}
                                </div>
                                <div>
                                    <strong>Rating:</strong> {movie.rating}
                                </div>
                            </div>
                            <div className='card-body'>
                                <ReviewList movie={movie} />
                            </div>
                            <div className='card-footer'>
                                <button className='btn btn-danger' type="submit" onClick={this.deleteMovie}>
                                    Delete Movie
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
            </div>
        );
    }
}
