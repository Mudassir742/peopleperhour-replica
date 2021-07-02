import React, { useState } from "react";

import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";

import "./Sidebar.css";

const Sidebar = (props) => {
  //store the radiobuttons value for filtration......
  const [deliveryFilter, setDeliveryFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");

  //uncheck the radioButtons after reset....
  const [timeUncheck, doTimeUncheck] = useState("");
  const [priceUncheck, doPriceUncheck] = useState("");

  const handleDeliverybtn = (e) => {
    setDeliveryFilter(e.target.value);
    doTimeUncheck(e.target);
    //console.log(deliveryFilter);
  };

  const handlePricebtn = (e) => {
    setPriceFilter(e.target.value);
    doPriceUncheck(e.target);
  };

  //this sends the filter value to parent i.e Filter-btn.....
  const handleSetAllFilterbtn = () => {
    props.filterCallBack(priceFilter, deliveryFilter);
    props.setShow(!props.show);
   
  };

  //funciton to toggle side menu.....
  const handleChange = () => {
    props.setShow(!props.show);
  };

  const priceReset = () => {
    setPriceFilter("");
    priceUncheck.checked = false;

    props.filterCallBack("", deliveryFilter);
  };

  const timeReset = () => {
    setDeliveryFilter("");
    timeUncheck.checked = false;

    props.filterCallBack(priceFilter, "");
  };

  const btnStyle = {
    cursor: "not-allowed",
    backgroundColor: "#EBEDF3",
    color: "#B1B9BC",
  };

  return (
    <div
      className={
        props.show ? "sidebar-background-active" : "sidebar-background"
      }
    >
      hello
      <div className={props.show ? "sidebar-main-active" : "sidebar-main"}>
        <div className="sidebar-header">
          <div className="sidebar-header-content">
            <h4>Filters</h4>
            <AiIcons.AiOutlineClose className="cross" onClick={handleChange} />
          </div>
          <hr />
        </div>
        <div className="sidebar-footer">
          <h3>
            <span className="sidebar-title">
              <span>Delivery time</span>
              <span className="reset-btn">
                <button
                  className={deliveryFilter ? "reset-display" : "reset-hide"}
                  onClick={timeReset}
                >
                  Reset
                </button>
              </span>
            </span>
            <MdIcons.MdKeyboardArrowDown className="down-arrow" />
          </h3>
          <div className="delivery-menu">
            <span className="rows">
              <label>
                <input
                  type="radio"
                  name="delivery"
                  value="1"
                  id="1"
                  onChange={handleDeliverybtn}
                />
                <span className="check-box">
                  <span>Within 1 day</span>
                  <small>10,000+</small>
                </span>
              </label>
            </span>
            <span className="rows">
              <label>
                <input
                  type="radio"
                  name="delivery"
                  value="2"
                  id="2"
                  onChange={handleDeliverybtn}
                />
                <span className="check-box">
                  <span>Within 2 day</span>
                  <small>10,000+</small>
                </span>
              </label>
            </span>
            <span className="rows">
              <label>
                <input
                  type="radio"
                  name="delivery"
                  value="3"
                  id="3"
                  onChange={handleDeliverybtn}
                />
                <span className="check-box">
                  <span>Within 3 day</span>
                  <small>10,000+</small>
                </span>
              </label>
            </span>
            <span className="rows">
              <label>
                <input
                  type="radio"
                  name="delivery"
                  value="4"
                  id="4"
                  onChange={handleDeliverybtn}
                />
                <span className="check-box">
                  <span>Within 4 day</span>
                  <small>10,000+</small>
                </span>
              </label>
            </span>
          </div>
          <hr />
          <h3>
            <span>Freelance country</span>
            <MdIcons.MdKeyboardArrowDown className="down-arrow" />
          </h3>

          <div className="country-search">
            <input type="text" />
          </div>
          <hr />

          <h3>
            <span className="sidebar-title">
              <span>Price</span>
              <span className="reset-btn">
                <button
                  className={priceFilter ? "reset-display" : "reset-hide"}
                  onClick={priceReset}
                >
                  Reset
                </button>
              </span>
            </span>
            <MdIcons.MdKeyboardArrowDown className="down-arrow" />
          </h3>
          <div className="delivery-menu">
            <span className="rows">
              <label>
                <input
                  type="radio"
                  value="20"
                  id="5"
                  name="price"
                  onChange={handlePricebtn}
                />
                <span className="check-box">
                  <span>Under $20</span>
                  <small>10,000+</small>
                </span>
              </label>
            </span>
            <span className="rows">
              <label>
                <input
                  type="radio"
                  value="50"
                  id="6"
                  name="price"
                  onChange={handlePricebtn}
                />
                <span className="check-box">
                  <span>$20 to $50</span>
                  <small>10,000+</small>
                </span>
              </label>
            </span>
            <span className="rows">
              <label>
                <input
                  type="radio"
                  value="100"
                  id="7"
                  name="price"
                  onChange={handlePricebtn}
                />
                <span className="check-box">
                  <span>$50 to $100</span>
                  <small>10,000+</small>
                </span>
              </label>
            </span>
            <span className="rows">
              <label>
                <input
                  type="radio"
                  value="101"
                  id="8"
                  name="price"
                  onChange={handlePricebtn}
                />
                <span className="check-box">
                  <span>Over $100</span>
                  <small>10,000+</small>
                </span>
              </label>
            </span>

            <div className="min-max">
              <span>
                {" "}
                <input type="number" placeholder="min" disabled="true" />
              </span>
              <span>
                <input type="number" placeholder="max" disabled="true" />
              </span>
            </div>
          </div>
          <hr />

          <div className="sidebar-btn">
            <button
              onClick={handleSetAllFilterbtn}
              style={
                deliveryFilter || priceFilter ? { cursor: "pointer" } : btnStyle
              }
              disabled={deliveryFilter || priceFilter ? false : true}
            >
              Show
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
