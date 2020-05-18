import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Item from './Item';
import Pagination from './Pagination';
import Spinner from './Spinner';

const Items = (props) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      const res = await axios.get(
        'http://jsonplaceholder.typicode.com/photos?_limit=100'
      );
      setItems(res.data);
      setLoading(false);
    };
    fetchItems();
  }, []);

  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  const currentItems = items.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  let content = <Spinner />;
  if (!loading) {
    content = (
      <React.Fragment>
        <div className="row">
          {currentItems.map((item) => {
            return <Item dummy={item} key={item.id} />;
          })}
        </div>
        <Pagination
          postsPerPage={itemsPerPage}
          totalPosts={items.length}
          paginate={paginate}
        />
      </React.Fragment>
    );
  }

  return content;
};

export default Items;
