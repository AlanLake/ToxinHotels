import React, { useState } from "react";

const Rating = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const stars = [...Array(5)];
  return (
    <>
      <div className="rating-container">
        {stars.map((star, i) => {
          return (
            <Star className='star'
              key={i}
              starId={i}
              rating={hover || rating}
              onMouseEnter={() => {
                setHover(i);
              }}
              onMouseLeave={() => {
                setHover(0);
              }}
              onClick={() => {
                setRating(i);
              }}
            ></Star>
          );
        })}
      </div>
    </>
  );
};

const Star = ({ starId, rating, key, onMouseEnter, onMouseLeave, onClick }) => {
    let styleClass = 'star-rating-blank'
    if (rating >= starId) {
        styleClass = 'star-rating-filled'
    }
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <svg
        className={styleClass}
        width="20"
        height="19"
        fill='#bc9cff'
        viewBox="0 0 20 19"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 13.4219L13.75 15.6719L12.7656 11.4062L16.0938 8.5L11.6875 8.125L10 4.09375L8.3125 8.125L3.90625 8.5L7.23438 11.4062L6.25 15.6719L10 13.4219ZM19.9844 7.23438L14.5469 11.9688L16.1875 19L10 15.25L3.8125 19L5.45312 11.9688L0.015625 7.23438L7.1875 6.625L10 0.015625L12.8125 6.625L19.9844 7.23438Z"
          fill="url(#paint0_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="10"
            y1="-2"
            x2="10"
            y2="22"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color='#bc9cff' />
            <stop offset="1" stop-color="#8BA4F9" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Rating;
