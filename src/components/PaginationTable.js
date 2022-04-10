import React, {useMemo} from 'react'
import {useTable, usePagination,useSortBy,useGlobalFilter} from 'react-table'
import MOCK_DATA from './NEO.json'
import {COLUMNS} from './columns'
import './table.css'
import { GlobalFilter } from './GlobalFilter'
export const PaginationTable = () =>{
    //usememo 
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(()=>MOCK_DATA,[])
    //makes sures the data is not fetched on every render.
    //the pagination table is the most updated table


    const{
        getTableProps, 
        getTableBodyProps, 
        headerGroups, 
        rows,
        prepareRow,
        state,
        setGlobalFilter,
        
        page,
        pageOptions,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        
    }= useTable({
        columns,
        data //mock data
    },
    useGlobalFilter,
    useSortBy,
    usePagination,
    )//globalFilter lowercase g or else it wont work, this is used in globalFilter in the filter
    const{globalFilter,pageIndex} =state
    
    return(
        <>
        <GlobalFilter filter={globalFilter}setFilter={setGlobalFilter}/>
        <table {...getTableProps}> 
            <thead>
                {headerGroups.map(headerGroup=>(
                <tr{...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) =>(
                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}
                    <span>
                    {column.isSorted ? (
                    column.isSortedDesc ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    )
                  ) : (
                    ""
                  )}
                    </span>
                        </th>
                    ))}
                    

                </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps}>
            {
                page.map(row=>{
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                        {//gives aceess to the individual row cell
                            row.cells.map((cell)=>{
                                return <td {...cell.getCellProps}>{cell.render('Cell')}</td>
                            })}
                        </tr>
                    )
                })}
              
            </tbody>
        </table>
        <div className='flex  justify-between items-center h-16  text-black relative shadow-sm font-light'>
            <span>
                Page{' '}
                <strong>
                    {pageIndex + 1} of {pageOptions.length}
                </strong>
            </span>
            <button onClick={()=>previousPage()} disabled={!canPreviousPage}>
                previous
            </button>
            <button onClick={()=>nextPage()} disabled={!canNextPage}>
                Next
            </button>
        </div>
        </>
    )
}