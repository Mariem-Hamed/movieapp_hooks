import React, { useState } from "react";

const Filter = ({ setTitleFilter, setRatingFilter }) => {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(0);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    setTitleFilter(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(event.target.value);
    setRatingFilter(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Filter by title"
        value={title}
        onChange={handleTitleChange}
      />
      <input
        type="number"
        placeholder="Filter by rating"
        value={rating}
        onChange={handleRatingChange}
      />
    </div>
  );
};

export default Filter;
