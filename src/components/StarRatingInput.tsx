import React, { useState } from 'react';
import { Star } from 'lucide-react';

interface StarRatingInputProps {
  /** The current rating value (0-5) */
  rating: number;
  /** A function to call when the rating is changed. If not provided, the component will be read-only. */
  setRating?: (rating: number) => void;
  /** Explicitly set the component to be read-only, disabling hover effects and clicks. */
  readOnly?: boolean;
  /** The size of the star icons in pixels. */
  size?: number;
  /** Additional CSS classes to apply to the container. */
  className?: string;
}

const StarRatingInput: React.FC<StarRatingInputProps> = ({
  rating,
  setRating,
  readOnly = false,
  size = 20,
  className = '',
}) => {
  console.log('StarRatingInput loaded');
  const [hoverRating, setHoverRating] = useState<number>(0);

  const isInteractive = !readOnly && !!setRating;

  const handleMouseEnter = (index: number) => {
    if (isInteractive) {
      setHoverRating(index);
    }
  };

  const handleMouseLeave = () => {
    if (isInteractive) {
      setHoverRating(0);
    }
  };

  const handleClick = (index: number) => {
    if (isInteractive && setRating) {
      setRating(index);
    }
  };

  return (
    <div className={`flex items-center space-x-1 ${className}`}>
      {[1, 2, 3, 4, 5].map((starIndex) => {
        // A star is filled if its index is less than or equal to the hovered rating, or if no hover is active, the actual rating.
        const isFilled = starIndex <= (hoverRating || rating);

        return (
          <Star
            key={starIndex}
            size={size}
            className={`
              transition-colors duration-150
              ${isFilled ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
              ${isInteractive ? 'cursor-pointer' : 'cursor-default'}
            `}
            onMouseEnter={() => handleMouseEnter(starIndex)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(starIndex)}
            aria-label={`Rate ${starIndex} star${starIndex > 1 ? 's' : ''}`}
          />
        );
      })}
    </div>
  );
};

export default StarRatingInput;