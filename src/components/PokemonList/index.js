import React from 'react';
import Card from '../Card';

const PokemonList = (props) => {
  return (
    <>
      {props.data?.map((pokemon) => (
        <Card 
          data={pokemon}
        />
      ))}
    </>
  )
}

export default PokemonList;
