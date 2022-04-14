import React from 'react'
//filter is the value of the set input, setFilter is the coressponding setter function.
export const GlobalFilter = ({filter,setFilter}) => {
  return (
    <span className='font-bold'>
        Search:{' '}
        <input  className='hover:bg-gray-200 rounded shadow-sm' value={filter || ''}
        onChange={(e) => setFilter(e.target.value)} />
    </span>
  )
}
