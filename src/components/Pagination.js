import React from 'react';
import {
  Pagination as ReactstrapPagination,
  PaginationItem,
  PaginationLink,
} from 'reactstrap';

const Pagination = ({ pagination, paginationHandler }) => {
  return (
    <ReactstrapPagination listClassName="justify-content-center">
      <PaginationItem disabled={pagination?.currentPage === 1}>
        <PaginationLink
          first
          value={pagination?.firstPage}
          onClick={paginationHandler}
        />
      </PaginationItem>
      <PaginationItem disabled={!pagination?.hasPreviousPage}>
        <PaginationLink
          previous
          value={pagination?.previousPage}
          onClick={paginationHandler}
        />
      </PaginationItem>
      <PaginationItem active>
        <PaginationLink disabled>{pagination?.currentPage}</PaginationLink>
      </PaginationItem>
      <PaginationItem disabled={!pagination?.hasNextPage}>
        <PaginationLink
          next
          value={pagination?.nextPage}
          onClick={paginationHandler}
        />
      </PaginationItem>
      <PaginationItem
        disabled={pagination?.lastPage === pagination?.currentPage}
      >
        <PaginationLink
          last
          value={pagination?.lastPage}
          onClick={paginationHandler}
        />
      </PaginationItem>
    </ReactstrapPagination>
  );
};

export default Pagination;
