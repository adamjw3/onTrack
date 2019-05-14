import React from "react";
import Pagination from "react-js-pagination";

const Paging = ({ currentPage, totalPosts, onChangePagination }) => {
  return (
    <Pagination
      activePage={currentPage}
      itemsCountPerPage={20}
      totalItemsCount={totalPosts}
      pageRangeDisplayed={20}
      onChange={onChangePagination}
      innerClass="pagination"
      activeClass="active"
      itemClass="page-item"
      linkClass="page-link"
    />
  );
};

export default Paging;
