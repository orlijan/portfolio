import React from 'react'
import { FilteringTable } from '../components/FilteringTable'
import { PaginationTable } from '../components/PaginationTable'
const Database = () => {
  return (
      
      <div className="bg-gray-100 text-gray-900 motion-safe:animate-fadeIn">
      <main className="min-w-6xl  mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="">
          <PaginationTable/>
        </div>
        <div className="mt-4">
        
        </div>
      </main>
    </div>
    )
}

export default Database