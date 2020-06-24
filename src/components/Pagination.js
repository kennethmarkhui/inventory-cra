import React from 'react';
import {
  Pagination as ReactstrapPagination,
  PaginationItem,
  PaginationLink,
} from 'reactstrap';

const Pagination = ({ pagination, changePageHandler }) => {
  return (
    <ReactstrapPagination listClassName="justify-content-center">
      <PaginationItem disabled={pagination?.currentPage === 1}>
        <PaginationLink
          first
          value={pagination?.firstPage}
          onClick={changePageHandler}
        />
      </PaginationItem>
      <PaginationItem disabled={!pagination?.hasPreviousPage}>
        <PaginationLink
          previous
          value={pagination?.previousPage}
          onClick={changePageHandler}
        />
      </PaginationItem>
      <PaginationItem active>
        <PaginationLink disabled>{pagination?.currentPage}</PaginationLink>
      </PaginationItem>
      <PaginationItem disabled={!pagination?.hasNextPage}>
        <PaginationLink
          next
          value={pagination?.nextPage}
          onClick={changePageHandler}
        />
      </PaginationItem>
      <PaginationItem
        disabled={pagination?.lastPage === pagination?.currentPage}
      >
        <PaginationLink
          last
          value={pagination?.lastPage}
          onClick={changePageHandler}
        />
      </PaginationItem>
    </ReactstrapPagination>
  );
};

export default Pagination;
