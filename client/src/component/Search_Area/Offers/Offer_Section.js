import React from "react";
import Categories from "./Categories/Categories";

import "./Offer_Section.css";

class Offers extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false, current: "Categories"};
  }

  displayMenu = () => {
    this.setState({ show: !this.state.show });
  };

  //menu selction functions start here.....
  showAll = () => {
    this.props.filterCallBack("All");
    this.setState({current:"Categories"})
  };

  showProgramming = () => {
    this.props.filterCallBack("Programming");
    this.setState({current:"Programming"})
  };

  showDesign = () => {
    this.props.filterCallBack("Design");
    this.setState({current:"Design"})
  };
  showSocial = () => {
    this.props.filterCallBack("Social");
    this.setState({current:"Social"})
  };
  showWriting = () => {
    this.props.filterCallBack("Writing");
    this.setState({current:"Writing"})
  };
  showVedio = () => {
    this.props.filterCallBack("Vedio");
    this.setState({current:"Vedio"})
  };

  //menu selction functions end here.....

  render() {
    return (
      <div style={{ backgroundColor: "#F7FAFC" }}>
        <div className="main_content">
          <div className="content">
            <div className="content_nav">
              <nav>
                <span>Search</span>
                <i className="fas fa-chevron-right"></i>
                <span>Offers</span>
                <i className="fas fa-chevron-right"></i>
              </nav>
            </div>

            <div className="headings">
              <h1>Responsive Web Design Offers & Services</h1>
              <h2>
                Looking for Responsive Web Design offers and services?
                PeoplePerHour has you covered.
              </h2>
            </div>
          </div>

          <div className="search_content">
            <div className="search">
              <input
                type="text"
                placeholder="Search for service & offers"
                name=""
                id="search_text"
              />
            </div>

            <button className="btn">
              <i className="fas fa-search"></i>
            </button>

            <div className="dropdown" onClick={this.displayMenu}>
              <div className="categories">
                <span>{this.state.current}</span>
              </div>

              <ul
                className={
                  this.state.show ? "dropdown-content" : "dropdown-content hide"
                }
              >
                <li onClick={this.showAll}>
                  <span>All Categories</span>
                </li>
                <li onClick={this.showProgramming}>
                  <span>Programming</span>
                </li>
                <li onClick={this.showDesign}>
                  <span>Design</span>
                </li>
                <li onClick={this.showSocial}>
                  <span>Social</span>
                </li>
                <li onClick={this.showWriting}>
                  <span>Writing</span>
                </li>
                <li onClick={this.showVedio}>
                  <span>Vedio Editing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Categories />

        <div className="border"></div>
      </div>
    );
  }
}
export default Offers;
