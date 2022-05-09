import React from 'react'
//filter is the value of the set input, setFilter is the coressponding setter function.
export const GlobalFilter = ({filter,setFilter}) => {
  return (
    <span className='text-2xl text-gray-700'>
        Search:{' '}
        <input  className=' form-control
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' value={filter || ''}
        onChange={(e) => setFilter(e.target.value)}placeholder="Enter a card name!" />
    </span>
  )
}
