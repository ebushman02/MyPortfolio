import React from 'react';
import Review from './review';


class ReviewList extends React.Component {
    state = {
        reviews: [],
    };

    componentDidMount() {
        // Assuming Review.getReview() fetches all reviews from an API
        Review.getReview().then(reviews => {
            this.setState({ reviews });
        });
    }

    render() {
        const { reviews } = this.state;
        const { movie } = this.props; // Assuming movie prop is passed to ReviewList

        return (
            <div>
                <div className='row'>
                    <div className='col-lg'>
                        {reviews.map(review => {
                            // Filter reviews by movieId
                            if (review.movieId === movie.id)
                                // compare the reviews movieId to the actual movie id
                                {
                                return <Review key={review.id} review={review} movieId={review.movieId} />;
                            }
                            return null; // Skip rendering if movieId doesn't match
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default ReviewList;
