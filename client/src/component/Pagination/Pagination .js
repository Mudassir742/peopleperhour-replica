import React, { useState, useEffect } from "react";
import * as RiIcon from "react-icons/ri";
import Lists from "../Projects/Lists/Lists";

import "./Pagination.css";

const Pagination = (props) => {
  const [currentPage, setcurrentPage] = useState(1); //gives the starting page....
  const [itemsPerPage] = useState(24); //cards on each page...

  const [pageNumberLimit] = useState(5); //show page count limit is 5
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  //move to page one when any filter is applied....
  useEffect(() => {
    setcurrentPage(1);
  }, [props.ListData]);

  const pages = [];
  for (let i = 1; i <= Math.ceil(props.ListData.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const handleClick = (e) => {
    setcurrentPage(Number(e.target.id)); //assigning number to the pagination bar at bottom...
  };

  //btn to move onto next page.....
  const handleNextbtn = (e) => {
    setcurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
      return true;
    }
    return false;
  };

  //btn to move onto prev page.....
  const handlePrevbtn = () => {
    setcurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
      return true;
    }
    return false;
  };

  const displayPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number} //id will be used to display number using handle click....
          onClick={handleClick}
          className={currentPage === number ? "active" : null}
        >
          {number}
        </li>
      );
    }
    return null;
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = props.ListData.slice(indexOfFirstItem, indexOfLastItem); //calculating data to dipslay on single page

  return (
    <div className="pagenumber-main">
      <Lists data={currentData} />
      <ul className="pagenumber">
        <li className="prev-btn">
          <button
            onClick={handlePrevbtn}
            disabled={currentPage === pages[0] ? true : false}
          >
            <a href="#list-top">
              {" "}
              <RiIcon.RiArrowLeftSLine className="arrow" />
            </a>
          </button>
        </li>

        <a href="#list-top">{displayPageNumbers}</a>

        <li className="next-btn">
          <button
            onClick={handleNextbtn}
            disabled={currentPage === pages[pages.length - 1] ? true : false}
          >
            <a href="#list-top">
              <RiIcon.RiArrowRightSLine className="arrow" />
            </a>
          </button>
        </li>
      </ul>
    </div>
  );
};
export default Pagination;
