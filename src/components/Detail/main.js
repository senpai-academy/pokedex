import React from 'react';

const Main = (props) => {
  return (
    <>
      <img 
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.data?.id}.png`} 
        alt={props.data?.name}
      />
      {props.data.types && props.data?.types?.map((type) => (
        <div>{type?.type?.name}</div>
      ))}
    </>
  )
}

export default Main;
