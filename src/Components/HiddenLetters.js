import React from 'react';
import './Style/HiddenLetters.scss';

const HiddenLetters = ({ item }) => {
  return (
      <div className="letter">{item}</div>
  );
};

export default HiddenLetters;
