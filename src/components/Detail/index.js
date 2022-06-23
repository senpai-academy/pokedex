import React from 'react';
import About from './about';
import Main from './main';
import Stats from './stats';

const Detail = (props) => {
  return (
    <div>
      <Main 
        data={props.data}
      />
      <About
        data={props.data}
        moves={props.data?.moves}
      />
      <Stats
        stats={props.data?.stats}
      />
    </div>
  )
}

export default Detail;
