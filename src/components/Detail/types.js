import React from 'react';

const Types = (props) => {
  return (
    <div className='flex flex-row justify-center mt-4'>
      {props.data && props.data?.map((type) => (
        <div 
          key={type?.type?.name}
          className={`background${type?.type?.name} capitalize text-white rounded-3xl p-2 min-w-fit m-2`}
        >
          {type?.type?.name}
        </div>
      ))}
    </div>
  )
}

export default Types;
