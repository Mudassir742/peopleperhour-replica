import React, { useState, useEffect, useCallback } from "react";
import Pagination from "../../Pagination/Pagination ";
import Sidebar from "./Sidebar/Sidebar";

import "./Filter-btn.css";

function Filterbtn(props) {
  const [show, setShow] = useState(false);

  const [categories, setCategories] = useState(props.ListData);

  const [filterData, setFilterData] = useState(categories);

  const [price, setPrice] = useState(""); //will store if price filter is applied
  const [time, setTime] = useState(""); //will store if time filter is applied

  const [sort, setSort] = useState("all"); //will store option of sort(recomended,trending etc...)

  //apply filter of time and price.....
  const applyFilter = useCallback(
    (Price, Time) => {
      //call back is used to render function only when time or price is cahnged
      if (Price && Time) {
        setCategories(
          props.ListData.filter((results) => {
            if (Price === "20")
              return (
                parseInt(results.sellerdata.price) < 20 &&
                parseInt(results.time) === parseInt(Time)
              );
            else if (Price === "50")
              return (
                parseInt(results.sellerdata.price) <= 50 &&
                parseInt(results.sellerdata.price) >= 20 &&
                parseInt(results.time) === parseInt(Time)
              );
            else if (Price === "100")
              return (
                parseInt(results.sellerdata.price) <= 100 &&
                parseInt(results.sellerdata.price) >= 50 &&
                parseInt(results.time) === parseInt(Time)
              );
            else if (Price === "101")
              return (
                parseInt(results.sellerdata.price) > 100 &&
                parseInt(results.time) === parseInt(Time)
              );
            else return results;
          })
        );
      } else if (Time && !Price) {
        setCategories(
          props.ListData.filter((results) => {
            return parseInt(results.time) === parseInt(Time);
          })
        );
      } else if (Price && !Time) {
        setCategories(
          props.ListData.filter((results) => {
            if (Price === "20") return parseInt(results.sellerdata.price) < 20;
            else if (Price === "50")
              return (
                parseInt(results.sellerdata.price) <= 50 &&
                parseInt(results.sellerdata.price) >= 20
              );
            else if (Price === "100")
              return (
                parseInt(results.sellerdata.price) <= 100 &&
                parseInt(results.sellerdata.price) >= 50
              );
            else if (Price === "101") return parseInt(results.sellerdata.price);
            else return results;
          })
        );
      } else {
        setCategories(props.ListData);
      }
    },
    [props.ListData]
  );

  //apply filter of sort(recomended,trending etc...)
  const applySort = useCallback(
    (opt) => {
      //call back is used to render function only when option is cahnged
      if (opt === "reco") {
        setFilterData(
          categories.filter((results) => {
            return results.sort === "recommended";
          })
        );
      } else if (opt === "trend") {
        setFilterData(
          categories.filter((results) => {
            return results.sort === "trending";
          })
        );
      } else if (opt === "popu") {
        setFilterData(
          categories.filter((results) => {
            return results.popularity === "true";
          })
        );
      } else if (opt === "high") {
        setFilterData(
          categories.sort(function (a, b) {
            return a.sellerdata.price - b.sellerdata.price;
          })
        );
      } else if (opt === "low") {
        setFilterData(
          categories.sort(function (a, b) {
            return b.sellerdata.price - a.sellerdata.price;
          })
        );
      } else {
        setFilterData(categories);
      }
    },
    [categories]
  );

  //this will run when props.ListData changes.....
  useEffect(() => {
    //setCategories(props.ListData);

    applyFilter(price, time);
  }, [props.ListData, applyFilter, time, price]);

  //this will run when categories changes.
  //categories will only be change when props.ListData change & timefilter or pricefilter are applied
  useEffect(() => {
    //setFilterData(categories);
    applySort(sort);
  }, [categories, applySort, sort]);

  //getting data from sidebar and applying time or price filter....
  const filterCallBack = (Price, Time) => {
    setPrice(Price);
    setTime(Time);

    applyFilter(Price, Time);
  };

  //toogle side-bar(show/hide).....
  const handleClick = () => {
    setShow(!show);
  };

  //handling sorting dropdown i.e(recommend,trend etc...)
  const handleSort = (e) => {
    setSort(e.target.value);

    applySort(e.target.value);
  };

  return (
    <div>
      <div className="background">
        <div className="filter-main">
          <div className="filter-btn">
            <button onClick={handleClick}>Filter</button>

            <div className="select-sort">
              <select value={sort} onChange={handleSort}>
                <option value="all">All</option>
                <option value="reco">Recomended</option>
                <option value="trend">Trending</option>
                <option value="popu">Popularity</option>
                <option value="high">Price: low to high</option>
                <option value="low">Price: high to low</option>
              </select>
            </div>
          </div>

          <div className="result">{filterData.length}+ Results</div>
        </div>
      </div>
      <Sidebar
        show={show}
        setShow={setShow}
        onClick={handleClick}
        filterCallBack={filterCallBack}
      />
      <Pagination ListData={filterData} />
    </div>
  );
}

export default Filterbtn;
