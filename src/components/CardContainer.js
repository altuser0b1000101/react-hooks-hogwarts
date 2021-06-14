import React, { useState } from 'react';
import PigCard from './PigCard';

function CardContainer({ hogData }) {
  const [hogFilter, setFilter] = useState('All');

  const displayHogs = () => {
    if (hogFilter === 'All') {
      return hogData;
    } else if (hogFilter === 'Greased') {
      return hogData.filer((hog) => hog.greased);
    } else {
      return hogData.filter((hog) => !hog.greased);
    }
  };
  console.log(displayHogs());
  return (
    <div>
      <label htmlFor='hogs'>Filter Grease:</label>
      <select onChange={(e) => setFilter(e.target.values)} id='hogs'>
        <option>All</option>
        <option>Greased</option>
        <option>Dry</option>
      </select>

      {displayHogs.map((hog) => (
        <PigCard key={hog.id} hogData={hog} />
      ))}
    </div>
  );
}

export default CardContainer;
