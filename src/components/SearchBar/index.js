import React from 'react';

const SearchBar = (props) => {
  return (
    <input
      className='border w-full'
      onChange={(event) => props.handleChange(event?.target?.value)}
      placeholder={props.placeholder}
      value={props.value}
    />
  )
}

export default SearchBar;
