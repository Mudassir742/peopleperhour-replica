import React, { useState,useEffect } from "react";
import Offers from "../Search_Area/Offers/Offer_Section";
import Filterbtn from "./Filter_Button/Filter-btn";
//import { ListData } from "./Lists/Data/ListData";

import "./Projects.css";

function Projects() {
  const [cate, setCate] = useState("All");
  const [ListData, setListData] = useState([]);
  const [filterData, setFilterData] = useState([]);

  useEffect(()=>{
    const headers = { 'Content-Type': 'application/json' }
    fetch("/gigs/api/data",{headers})
      .then((response)=> response.json())
      .then(data=>{setListData(data);setFilterData(data)})

    //console.log(data);
  },[])

  const filterCallBack = (opt) => {
    console.log(opt)
    setCate(opt);

    if (opt === "All") {
      setFilterData(
        ListData.filter((results) => results)
      );
    } else {
      setFilterData(
        ListData.filter((results) => results.cate === opt)
      );
    }

    console.log(filterData);

  };

  return (
    <div className="projects-main">
      <Offers filterCallBack={filterCallBack} />
      <Filterbtn filter={cate} ListData={filterData} />
    </div>
  );
}

export default Projects;
