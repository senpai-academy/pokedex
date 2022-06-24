import React from 'react';

const About = (props) => {
  return (
    <div>
      <h1 className={`id${props.data?.types && props.data?.types[0]?.type.name} text-center font-bold text-xl`}>About</h1>
      <div className='flex justify-around'>
        <div>
          <div>
            <i className="fa-solid fa-weight-scale pl-2">{props.data?.weight}</i>
          </div>
          <h2>Weight</h2>
        </div>
        <div>
          <div>
            <i className="fa-solid fa-ruler-vertical pl-2">{props.data?.height}</i>
          </div>
          <h2>Height</h2>
        </div>
        <div>
          <ul>
            <li>{props.moves && props.data?.moves[0]?.move?.name}</li>
            <li>{props.moves && props.data?.moves[1]?.move?.name}</li>
          </ul>
          <h2>Moves</h2>
        </div>
      </div>
    </div>
  )
}

export default About;
