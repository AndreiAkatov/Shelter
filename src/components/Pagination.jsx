import React from 'react'
import ReactPaginate from 'react-paginate';

function Pagination({ onChangePage, paginationPages }) {
   return (
      <ReactPaginate
         className='pagination-btns'
         breakLabel="..."
         nextLabel=">"
         onPageChange={event => onChangePage(event.selected + 1)}
         pageRangeDisplayed={1}
         pageCount={paginationPages}
         previousLabel="<"
         renderOnZeroPageCount={null}
      />
   )
}

export default Pagination