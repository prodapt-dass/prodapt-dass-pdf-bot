import React from "react";
import "../Styles/Home.css";
// import { useState } from "react";
import { VscSend } from "react-icons/vsc";



import deal from "../Assets/Home-svg/Dealsheet.svg";
import monitor from '../Assets/Home-svg/Monitoring.svg';

import manage from "../Assets/Home-svg/Management.svg";

import support from "../Assets/Home-svg/Support.svg";

import { useNavigate } from "react-router-dom";

const Home = ({ isLeftSidebarCollapsed }) => {
  const cards = [
    {
      title: "DEAL - SHEET",
      description1:
        "Prepare cost revenue for 4 members in offshore for fixed bit project",
      description2:
        "Prepare cost revenue for 4 members in offshore for fixed T&M",
    },
    {
      title: "PROJECT MONITORING & REPORTING",
      description1:
        "Provide a brief summary of the project's objectives and scope.",
      description2: "Include the project's start and end dates.",
    },
    {
      title: "INTELLIGENT DECISION SUPPORT",
      description1:
        "Identify potential risks and issues that have arisen or been mitigated",
      description2:
        "Provide updates on risk assessments and risk response strategies.",
    },
    {
      title: "SMART RESOURCE MANAGEMENT",
      description1:
        "Track the performance of your project using key performance indicators.",
      description2:
        "Predictively improve the management of Software and equipment resources",
    },
  ];

    const goToNext = () => {
      navigate("/side1");
    };

    const navigate =useNavigate();

  // const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    if (event.key === "Enter") {
      goToNext();
    }
    
  };
const icons = [
  <img src={deal} key="icon1" alt="icon" className="home-icon" />,

  <img src={monitor} key="icon2" alt="icon" className="home-icon" />,

  <img src={manage} key="icon3" alt="icon" className="home-icon" />,

  <img src={support} key="icon4" alt="icon" className="home-icon" />,
];


  return (
    <div className={`home ${isLeftSidebarCollapsed ? "collapsed" : ""}`}>
      <div
        className="container"
        style={{
          marginLeft: isLeftSidebarCollapsed ? "24%" : "30%",
          width: isLeftSidebarCollapsed ? "73%" : "67%",
        }}
      >
        <div
          className="container-heading"
          // style={{
          //   marginTop: isLeftSidebarCollapsed ? "5%" : "5%",
          // }}
        >
          {/* <img src={star} alt="Star" className="star-image" /> */}

          <div className="container-header1">How can I help you today?</div>
          {/* <img src={fallingStar} alt="Star" className="fallingStar-image" /> */}
          {/* <div className="container-header2">Project Management AI</div> */}
          <div className="container-header3">
            Step into the world of endless possibilities! Welcome to our chat
            space.
          </div>
        </div>

        {/* Icons, Titles, and Cards in a Single Row */}
        
          <div className="icons-titles-and-cards">
            {cards.map((card, index) => (
              <div className="icon-title-and-cards" key={index}>
                {/* <div className="icon-and-title">
                {icons[index]}
                <h3>{card.title}</h3>
              </div> */}
                <div className="cards">
                  <div className="card">
                    <p>{card.description1}</p>
                  </div>
                  <div className="card">
                    <p>{card.description2}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        

        {/* Search bar */}
        <div
          className="container-search-bar"
          style={{ marginTop: isLeftSidebarCollapsed ? "2%" : "2%" }}
        >
          <input
            type="text"
            placeholder="Enter Message..."
            onKeyDown={handleSearch}
          />
          <div className="container-search-icon" onClick={handleSearch}>
            <VscSend size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
