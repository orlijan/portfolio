import React, {useMemo} from 'react'
import {useTable, useGlobalFilter, useFilters} from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import {COLUMNS} from './columns'
import { GlobalFilter } from './GlobalFilter'
//import './table.css'
export const FilteringTable = () =>{
    //usememo 
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(()=>MOCK_DATA,[])
    //makes sures the data is not fetched on every render

    const{
        getTableProps, 
        getTableBodyProps, 
        headerGroups, 
        rows,
        prepareRow,
        state,
        setGlobalFilter,
    }= useTable({
        columns,
        data //mock data
    }, 
    useFilters,
    useGlobalFilter
    
    )
    const{globalFilter} =state

    return(
        <>
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        <table {...getTableProps}> 
            <thead>
                {headerGroups.map(headerGroup=>(
                <tr{...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) =>(
                    <th {...column.getHeaderProps()}>{column.render('Header')}
                    
                    <div>{column.canFilter ? column.render('Filter'): null } </div>


                    </th>
                    ))}
                    

                </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps}>
            {
                rows.map(row=>{
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
        </>
    )
}