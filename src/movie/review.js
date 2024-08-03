import React from 'react';
import $ from 'jquery';
import StarRating from './Stars';

export default class Review extends React.Component {
    static url = 'https://6688a5410ea28ca88b85b20f.mockapi.io/reviews';
// Basic Crud stuff
    static getReview() {
        return $.get(this.url);
    }

    static createReview(name, content) {
        return $.post(this.url, { name, content });
    }

    static updateReview(id, newName, newContent) {
        return $.ajax({
            url: `${this.url}/${id}`,
            type: 'PUT',
            data: JSON.stringify({ name: newName, content: newContent }),
            contentType: 'application/json',
            crossDomain: true,
        });
    }

    static deleteReview(id) {
        return $.ajax({
            url: `${this.url}/${id}`,
            type: 'DELETE',
        });
    }

    render() {
        const { review } = this.props; // Assuming review is passed as a prop
// display the reviews
        return (
            <div>
            <div className='card' id={review.movieId}>
                <div className='card-header'>
                <h2>{review.name}</h2>
                </div>
                <div className='card-body'>
                <div>{review.content}</div>
                <hr />
                <div>Rating: {review.rating}</div>
                </div>
                </div>
                <br/>
            </div>
            
        );
    }
}





