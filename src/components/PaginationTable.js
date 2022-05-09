
import React, { useMemo } from "react";
import {
  useTable,
  usePagination,
  useSortBy,
  useGlobalFilter,
  useFilters,
} from "react-table";
import MOCK_DATA from "./MOCK_DATA.json";
import { COLUMNS } from "./columns";
import { GlobalFilter } from "./GlobalFilter";
import className from "classnames";
//import dat from "./BOK.json"

export const PaginationTable = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);
  //makes sures the data is not fetched on every render.
  //the pagination table is the most updated table

  const {
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
  } = useTable(
    {
      columns,
      data, //mock data
      
    },
    useGlobalFilter,
    useFilters,
    useSortBy,
    usePagination,
  ); //globalFilter lowercase g or else it wont work, this is used in globalFilter in the filter
  const { globalFilter, pageIndex } = state;

  return (
    <>
      <div className="mt-2 flex flex-col">
        <div className="-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
              <table {...getTableProps} className="max-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        <th className="px-1 py-1 text-left text-xs font-medium text-gray-500 uppercase tracking-wide select-none"
                          {...column.getHeaderProps(
                             column.getSortByToggleProps()
                            )}>
                          {column.render('Header')}
                          {/* <span className="flex flex-shrink">
                            {column.isSorted ? (
                              column.isSortedDesc ? (
<svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M279 224H41c-21.4 0-32.1-25.9-17-41L143 64c9.4-9.4 24.6-9.4 33.9 0l119 119c15.2 15.1 4.5 41-16.9 41z"></path></svg>
                                ) : (
                                  <svg className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"></path></svg>
                              )
                            ) : (
                              <svg  className={className} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"></path></svg>

                            )}
                          </span> */}

                          <div >{column.canFilter ? column.render('Filter') : null}</div>
                          
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps} className="bg-white divide-y divide-gray-200 font-light ">
                  {page.map((row) => {
                    prepareRow(row);
                    return (
                      <tr {...row.getRowProps()}>
                        {
                          //gives aceess to the individual row cell
                          row.cells.map((cell) => {
                            return (
                              <td {...cell.getCellProps} className="px-6 py-4 ">
                                {cell.render("Cell")}
                              </td>
                            );
                          })
                        }
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className=" flex place-items-center  space-x-1 h-16 text- relative shadow-sm font-light">
                <span>
                  Page{" "}
                  <strong>
                    {pageIndex + 1} of {pageOptions.length}
                  </strong>
                </span>
                <button
                  className="relative inline-flex items-center px-1  border border-gray-500 text-sm font-bold rounded-md text-gray-700 bg-white hover:bg-gray-100"
                  onClick={() => previousPage()}
                  disabled={!canPreviousPage}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
                <button
                  className="relative inline-flex items-center px-1  border border-gray-500 text-sm font-bold rounded-md text-gray-700 bg-white hover:bg-gray-100"
                  onClick={() => nextPage()}
                  disabled={!canNextPage}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
