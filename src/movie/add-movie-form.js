import React from 'react';
import $ from 'jquery';

export default class AddMovieForm extends React.Component {
    static url = 'https://6688a5410ea28ca88b85b20f.mockapi.io/movie';

    state = {
        newTitle: '',
        newRuntime: '',
        newRating: '',
        newCover: '',
        loading: false,
        successMessage: '',
        errorMessage: '',
    };

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
        const { newTitle, newRuntime, newRating, newCover } = this.state;
        if (newTitle && newRuntime && newRating && newCover) {
            this.setState({ loading: true, successMessage: '', errorMessage: '' });
            $.post(AddMovieForm.url, { title: newTitle, runtime: newRuntime, rating: newRating, cover: newCover })
                .then(() => {
                    this.setState({
                        newTitle: '',
                        newRuntime: '',
                        newRating: '',
                        newCover: '',
                        loading: false,
                        successMessage: 'Movie added successfully!',
                    });
                    // Optionally, fetch updated movie list or perform other actions
                })
                .catch((error) => {
                    this.setState({
                        loading: false,
                        errorMessage: 'Failed to add movie. Please try again later.',
                    });
                }).then(() =>{
                    window.location.reload();
                });
        } else {
            this.setState({ errorMessage: 'Please fill out all fields.' });
        }
    };

    render() {
        const { newTitle, newRuntime, newRating, newCover, loading, successMessage, errorMessage } = this.state;

        return (
            <div>
            <div className='card'>
                <div className='card-header'>
                    <h3>Add New Movie</h3>
                </div>
                
                    <form onSubmit={this.handleFormSubmit}>
                    <div className='card-body'>
                        <div className='form-group'>
                            <label>Title:</label>
                            <input
                                type='text'
                                className='form-control'
                                name='newTitle'
                                value={newTitle}
                                onChange={this.handleInputChange}
                                required
                            />
                        </div>
                        <div className='form-group'>
                            <label>Runtime:</label>
                            <input
                                type='text'
                                className='form-control'
                                name='newRuntime'
                                value={newRuntime}
                                onChange={this.handleInputChange}
                                required
                            />
                        </div>
                        <div className='form-group'>
                            <label>Rating:</label>
                            <input
                                type='text'
                                className='form-control'
                                name='newRating'
                                value={newRating}
                                onChange={this.handleInputChange}
                                required
                            />
                        </div>
                        <div className='form-group'>
                            <label>Cover URL:</label>
                            <input
                                type='text'
                                className='form-control'
                                name='newCover'
                                value={newCover}
                                onChange={this.handleInputChange}
                                required
                            />
                        </div>
                        {loading && <p>Loading...</p>}
                        {successMessage && <p className='text-success'>{successMessage}</p>}
                        {errorMessage && <p className='text-danger'>{errorMessage}</p>}
                        </div>
                        <div className='card-footer'>
                        <button type='submit' className='btn btn-primary'>
                            Add Movie
                        </button>
                        </div>

                    </form>
               
            </div>
        </div>
        );
    }
}
