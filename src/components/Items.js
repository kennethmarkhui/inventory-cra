import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Row } from 'reactstrap';

import Item from './Item';
import Pagination from './Pagination';
import Spinner from './Spinner';

const Items = (props) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      // http://jsonplaceholder.typicode.com/photos?_limit=100
      const res = await axios.get(
        'https://my.api.mockaroo.com/api/items?key=7d747620'
      );
      setItems(res.data);
      setIsLoading(false);
    };
    fetchItems();
  }, []);

  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  const currentItems = items.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <React.Fragment>
      {isLoading && <Spinner />}
      {!isLoading && items && (
        <React.Fragment>
          <Row>
            {currentItems.map((item) => {
              return <Item dummy={item} key={item.id} />;
            })}
          </Row>
          <Pagination
            postsPerPage={itemsPerPage}
            totalPosts={items.length}
            paginate={paginate}
          />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Items;
