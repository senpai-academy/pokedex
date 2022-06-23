import React from 'react';
import {
  Link
} from 'react-router-dom';

const Card = (props) => {
  return (
    <Link
      to={`/pokemon/${props.data?.id}`}
    >
      <div>
        <h1>{props.data?.name}</h1>
        <img 
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.data?.id}.png`} 
          alt={props.data?.name}
        />
        <h1>{props.data?.id}</h1>
        <h1>{props.data?.types[0]?.type?.name}</h1>
      </div>
    </Link>
  )
}

export default Card;
