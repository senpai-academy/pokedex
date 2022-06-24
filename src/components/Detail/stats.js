import React, { useEffect } from 'react';

const Stats = (props) => {

  const renderStat = () => {
    return props.stats?.map((stat) => (
      <div 
        key={stat.base_stat} 
        className='block bg-gray-100 h-2 rounded-xl w-full m-2'>
        <div className={`background${props.type} fblock  h-2 rounded-xl`} style={{width: `${stat.base_stat}%` }}></div>
      </div>
    ))
  }

  return (
    <>
    <h1 className={`id${props.type} text-center font-bold text-xl`}>Base Stats</h1>
    <div className="flex w-full p-4">
      <div 
        className={`id${props.type} font-bold pr-2 containerStats`}
      >
        <h2>HP</h2>
        <h2>ATK</h2>
        <h2>DEF</h2>
        <h2>SATK</h2>
        <h2>SDEF</h2>
        <h2>SPD</h2>
      </div> 

      <div className="flex flex-col pr-1 pl-2">
          <h2>{props.stats && props.stats[0]?.base_stat}</h2>
          <h2>{props.stats && props.stats[1]?.base_stat}</h2>
          <h2>{props.stats && props.stats[2]?.base_stat}</h2>
          <h2>{props.stats && props.stats[3]?.base_stat}</h2>
          <h2>{props.stats && props.stats[4]?.base_stat}</h2>
          <h2>{props.stats && props.stats[5]?.base_stat}</h2>
      </div>
        
      <div className='flex flex-col align-center w-full'>
        {renderStat()}
      </div>
    </div>
    </>
  )
}

export default Stats;
