import React, { useState } from 'react';

function PigCard({ hogData }) {
  const [flipped, setCard] = useState(false);

  return (
    <div onClick={() => setCard(!flipped)} className='pigTile'>
      {flipped ? null : (
        <>
          {' '}
          <img src={hogData.image} />
          <h3>{hogData.name}</h3>{' '}
        </>
      )}
      {flipped ? (
        <ul>
          <li>
            greased:{hogData.greased ? 'all greased up' : 'needs some oil'}
          </li>
          <li>medal: {hogData['highest medal achieved']}</li>
          <li>special: {hogData.specialty}</li>
          <li>weight: {hogData.weight} hog Lbs</li>
        </ul>
      ) : null}
    </div>
  );
}
export default PigCard;
