import React, { useState } from 'react';

import Item from './Item';
import Pagination from './Pagination';
import DUMMY_DATA from '../DUMMY_DATA.json';

const Items = (props) => {
  const [items, setItems] = useState(DUMMY_DATA);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(1);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = items.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <React.Fragment>
      <div className="row">
        {currentPosts.map((item) => {
          return <Item dummy={item} key={item.itemId} />;
        })}
      </div>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={items.length}
        paginate={paginate}
      />
    </React.Fragment>
  );
};

export default Items;
