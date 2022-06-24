import React from 'react';
import {
  Link
} from 'react-router-dom';

const Card = (props) => {
  return (
    <Link
      to={`/pokemon/${props.data?.id}`}
    >
      <div className={`border${props.data?.types[0]?.type?.name} flex flex-col h-48 w-48 border-2 border-black rounded-md justify-center m-4`}>
        <div className='text-end'>
          <h1 className={`id${props.data?.types[0]?.type?.name}`}>
            #{String(props.data?.id).padStart(3, '0')}
          </h1>
        </div>
        
        <img
          className='h-32 m-auto w-32'
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.data?.id}.png`} 
          alt={props.data?.name}
        />
        <div className={`background${props.data?.types[0]?.type?.name} text-center pt-2 capitalize text-white h-24 w-full`}>
          <h1>{props.data?.name}</h1>
        </div>
      </div>
    </Link>
  )
}

export default Card;
