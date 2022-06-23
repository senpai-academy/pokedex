import React, { useEffect } from 'react';

const Stats = (props) => {
  return (
    <>
      <h1>Base Stats</h1>
      <h2>HP</h2>
      {props.stats && props.stats[0]?.base_stat}
      <h2>ATK</h2>
      {props.stats && props.stats[1]?.base_stat}
      <h2>DEF</h2>
      {props.stats && props.stats[2]?.base_stat}
      <h2>SATK</h2>
      {props.stats && props.stats[3]?.base_stat}
      <h2>SDEF</h2>
      {props.stats && props.stats[4]?.base_stat}
      <h2>SPD</h2>
      {props.stats && props.stats[5]?.base_stat}
    </>
  )
}

export default Stats;
