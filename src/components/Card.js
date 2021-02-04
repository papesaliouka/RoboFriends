import React from 'react';

const Card = ({name, id, email}) => {
  return(
    <div className=' tc bg-light-green dib grow shadow-5 pa3 ma2 br3'>
      <img src={`https://robohash.org/${id}?200*200`} alt='robots' />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

export default Card;