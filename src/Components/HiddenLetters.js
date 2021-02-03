import React from 'react';
import './Style/HiddenLetters.css';

const HiddenLetters = ({ item }) => {
  return (
    <div className="container">
      <div class="letter">{item}</div>
    </div>
  );
};

export default HiddenLetters;
