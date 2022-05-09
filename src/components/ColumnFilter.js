import React from 'react'
//filter is the value of the set input, setFilter is the coressponding setter function.
export const ColumnFilter = ({column}) => {
  const{ filterValue,setFilter }= column
  return (
    <span>
        <input className='' value={filterValue || ''} onChange={(e) => setFilter(e.target.value) } placeholder="Type here..."/>
    </span>
  )
}
