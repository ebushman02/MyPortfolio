import React, { useState } from 'react';

const StarRating = ({ onChange }) => {
    const [selectedStarsCount, setSelectedStarsCount] = useState(0);

    const handleStarClick = (rating) => {
        const newSelectedStarsCount = rating === selectedStarsCount ? 0 : rating; // Toggle selection

        setSelectedStarsCount(newSelectedStarsCount); // Update selectedStarsCount with the clicked star rating
        onChange(newSelectedStarsCount); // Call the onChange handler with the selected rating
    };

    const stars = [1, 2, 3, 4, 5];
    //Set stars equal to an array ranging from 1 to 5

    return (
        <div>
            {/* map the stars so that onclick it selects the amount of stars currently hovered and changes the color */}
            {stars.map((star) => (
                <span
                    key={star}
                    onClick={() => handleStarClick(star) && setSelectedStarsCount(star)}
                    
                    style={{ cursor: 'pointer', color: star <= selectedStarsCount ? 'gold' : 'gray' }}
                >
                    ★ {/* Display a star (★) */}
                </span>
            ))}
        </div>
    );
};

export default StarRating;

