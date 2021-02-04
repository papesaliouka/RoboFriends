import React from 'react';

const SearchBox = ({searchChange}) => {
  return(
    <div>
      <input
        className='bg-lightest-blue bg--light br2 ma2 pa3' 
        type='search' 
        placeholder='Search Robots'
        onChange={searchChange}
       />
    </div>
  );
}

export default SearchBox;