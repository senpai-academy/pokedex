import React from 'react';
import Card from '../Card';

const PokemonList = (props) => {
  return (
    <div className='flex flex-row flex-wrap max-w-3xl'>
      {props.data?.map((pokemon) => (
        <Card 
          key={pokemon.id}
          data={pokemon}
        />
      ))}
    </div>
  )
}

export default PokemonList;
