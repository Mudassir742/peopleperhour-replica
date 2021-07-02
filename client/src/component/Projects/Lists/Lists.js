import React from "react";

import "./Lists.css";

function Lists(props) {
  return (
    <div className="background" id="list-top">
      <div className="trending_offers">
        <ul className="project-item">
          {props.data.map((item, index) => {
            return (
              <li key={index} className="project-item-card">
                <div className="image">
                  <img src={item.img} alt="" />
                </div>

                <div className="box_1">
                  <p>{item.title}</p>
                  <ul className="trend_suggestion">
                    <li>
                      {" "}
                      <a href="/">
                        <span>{item.sugdata.s1}</span>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <span>{item.sugdata.s2}</span>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <span>{item.sugdata.s3}</span>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <span>{item.sugdata.s4}</span>
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="/">
                        <span>{item.sugdata.s5}</span>
                      </a>
                    </li>
                  </ul>

                  <div className="seller">
                    <div className="seller_profile">
                      <img src={item.sellerdata.img} alt="seller" />

                      <div className="seller_intro">
                        <div className="seller_name">
                          <span>{item.sellerdata.name}</span>
                        </div>
                        <div className="seller_rating">
                          <i className="fas fa-star" id="star"></i>
                          <span>{item.sellerdata.rating}</span>
                          <span>{item.sellerdata.number}</span>
                        </div>
                      </div>
                    </div>

                    <span id="price">{item.sellerdata.price}$</span>
                  </div>
                </div>
                <hr />
                <div className="time">
                  <small>delivered in {item.time} days</small>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Lists;
