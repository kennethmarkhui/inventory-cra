import React, { useEffect, useContext } from 'react';
import { Row } from 'reactstrap';

import Item from './Item';
import Spinner from './Spinner';
import Pagination from './Pagination';

import ItemsContext from '../context/items/itemsContext';

let renderCount = 0;

const Items = (props) => {
  renderCount++;
  const itemsContext = useContext(ItemsContext);
  const {
    isLoading,
    items,
    fetchItems,
    clearItems,
    pageNumber,
    setPage,
    pagination,
  } = itemsContext;

  useEffect(() => {
    fetchItems(pageNumber);
    // eslint-disable-next-line
  }, [pageNumber]);

  useEffect(() => {
    // componentWillUnmount
    return () => clearItems();
    // eslint-disable-next-line
  }, []);

  const paginationHandler = (e) => {
    // console.log(e.currentTarget.value);
    setPage(e.currentTarget.value);
  };

  return (
    <React.Fragment>
      {isLoading && <Spinner />}
      {!isLoading && items && (
        <React.Fragment>
          <Row>
            {items.length === 0 ? (
              <h2>No Items</h2>
            ) : (
              items.map((item) => {
                return <Item dummy={item} key={item._id} />;
              })
            )}
          </Row>
          <Pagination
            pagination={pagination}
            paginationHandler={paginationHandler}
          />
          {/* <Pagination listClassName="justify-content-center">
            <PaginationItem disabled={pagination.currentPage === 1}>
              <PaginationLink
                first
                value={pagination.firstPage}
                onClick={paginationHandler}
              />
            </PaginationItem>
            <PaginationItem disabled={!pagination.hasPreviousPage}>
              <PaginationLink
                previous
                value={pagination.previousPage}
                onClick={paginationHandler}
              />
            </PaginationItem>
            <PaginationItem active>
              <PaginationLink disabled>{pagination.currentPage}</PaginationLink>
            </PaginationItem>
            <PaginationItem disabled={!pagination.hasNextPage}>
              <PaginationLink
                next
                value={pagination.nextPage}
                onClick={paginationHandler}
              />
            </PaginationItem>
            <PaginationItem
              disabled={pagination.lastPage === pagination.currentPage}
            >
              <PaginationLink
                last
                value={pagination.lastPage}
                onClick={paginationHandler}
              />
            </PaginationItem>
          </Pagination> */}
        </React.Fragment>
      )}
      Items Component Render Count: {renderCount}
    </React.Fragment>
  );
};

export default Items;
