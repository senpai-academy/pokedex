import React from 'react';
import {
  Link
} from 'react-router-dom';
import About from './about';
import Types from './types';
import Stats from './stats';

const Detail = (props) => {
  return (
    <div className={`background${props.data.types && props.data.types[0].type.name} flex flex-col rounded-2xl h-screen p-1 w-1/2`}>
      <div className='flex h-96'>
        <Link
          to="/"
        >
          <i className="fa-solid fa-arrow-left"></i>
        </Link>
        <h1>{props.data.name}</h1>
        <h2>{props.data.id}</h2>
      </div>
      <img
        className='absolute h-96 w-96'
        style={{top: '50px', left: '30%'}}
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.data?.id}.png`} 
        alt={props.data?.name}
      />
      <div className='bg-white mt-12 rounded-xl'>
        <Types 
          data={props.data?.types}
        />
        <About
          data={props.data}
          moves={props.data?.moves}
        />
        <Stats
          stats={props.data?.stats}
          type={props.data?.types && props.data?.types[0]?.type.name}
        />
      </div>
    </div>
  )
}

export default Detail;
