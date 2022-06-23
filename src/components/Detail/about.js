import React from 'react';

const About = (props) => {
  return (
    <>
      <h1>About</h1>
      <h2>Weight</h2>
      {props.data?.weight}
      <h2>Height</h2>
      {props.data?.height}
      <h2>Moves</h2>
      {props.moves && props.data?.moves[0]?.move?.name}
      {props.moves && props.data?.moves[1]?.move?.name}
    </>
  )
}

export default About;
