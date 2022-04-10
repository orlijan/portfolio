import React from 'react'
//filter is the value of the set input, setFilter is the coressponding setter function.
export const ColumnFilter = ({filter,setFilter}) => {
  return (
    <span>
        Search: {' '}
        <input value={filter || ' '} onChange={(e) => setFilter(e.target.value)} />
    </span>
  )
}
// import React from 'react'
// //filter is the value of the set input, setFilter is the coressponding setter function.
// export const ColumnFilter = ({column}) => {
//     const{filterValue, setFilter} =column
//   return (
//     <span>
//         Search: {' '}
//         <input value={filterValue || ''} onChange={(e) => setFilter(e.target.value)} />
//     </span>
//   )
// }
