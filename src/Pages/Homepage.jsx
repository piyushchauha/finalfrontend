import React from "react";
import cars24logo from "../Assets/Images/cars24logo.png";
import cars24heropage from "../Assets/Images/cars24heropage.png";
import buycar from "../Assets/Images/buycar.png";
import sellcar from "../Assets/Images/sellcar.png";
import newcar from "../Assets/Images/newcar.png";
import carloan from "../Assets/Images/carloan.png";
import vehiclehistory from "../Assets/Images/vehiclehistory.png";
import insurance from "../Assets/Images/insurance.png";
import servicerepair from "../Assets/Images/servicerepair.png";
import more from "../Assets/Images/more.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

export default function Homepage() {
  return (
    <div className="container">
      {/* Header section */}
      <div
        className="header"
        style={{
          height: "80px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <div
          className="innerheader"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            paddingRight: "100px",
            width: "1200px",
            marginRight: "0px",
          }}
        >
          {/* Logo and Location */}
          {/* <div className='headeritems'  style={{display:'flex',justifyContent: 'space-evenly',alignItems:'center',width:'100%'}}> */}
          <div
            className="headersection1"
            style={{ display: "flex", paddingRight: "60px" }}
          >
            <div className="Logosection" style={{ marginLeft: "5.6px" }}>
              <p>
                <img
                  src={cars24logo}
                  style={{ height: "39px", width: "80px", marginRight: "5px" }} alt="Cars24logo"
                />
              </p>
            </div>
            <div
              className="locationsection"
              style={{ display: "flex", alignItems: "center", gap: "5px" }}
            >
              <div
                className="locationsectionborder"
                style={{
                  height: "46px",
                  width: "162.46px",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#FAFAFA",
                }}
              >
                <FontAwesomeIcon
                  icon={faLocationDot}
                  style={{ paddingRight: "px", marginRight: "10px" }}
                />
                <p
                  style={{
                    fontWeight: "bold",
                    fontFamily: "sans-serif",
                    paddingRight: "15px",
                  }}
                >
                  {" "}
                  location
                </p>
                <FontAwesomeIcon icon={faChevronDown} />
              </div>
            </div>
          </div>
          <div
            className="headersection2"
            style={{ display: "flex", paddingRight: "60px", flex: 5 }}
          >
            <ul
              className="headermidsection"
              style={{ gap: "20px", display: "flex" }}
            >
              <div
                className="buysection"
                style={{ display: "flex", alignItems: "center", gap: "3px" }}
              >
                <li
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: "16px",
                    listStyle: "none",
                  }}
                >
                  Buy used car
                </li>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  style={{ marginLeft: "5px" }}
                />
              </div>
              <div
                className="sellsection"
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <li
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: "16px",
                    listStyle: "none",
                  }}
                >
                  Sell Car
                </li>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  style={{ marginLeft: "5px" }}
                />
              </div>
              <div
                className="carfinancesection"
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <li
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: "16px",
                    listStyle: "none",
                  }}
                >
                  Car finance
                </li>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  style={{ marginLeft: "5px" }}
                />
              </div>
              <div
                className="newcarssection"
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <li
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: "16px",
                    listStyle: "none",
                  }}
                >
                  New cars{" "}
                </li>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  style={{ marginLeft: "5px" }}
                />
              </div>
              <div
                className="carservicesection"
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                <li
                  style={{
                    fontFamily: "sans-serif",
                    fontSize: "16px",
                    listStyle: "none",
                  }}
                >
                  Car services{" "}
                </li>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  style={{ marginLeft: "5px" }}
                />
              </div>
            </ul>
          </div>
          <div className="headersection3" style={{ display: "flex" }}>
            <div className="loginsection">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    width: "24px",
                    height: "24px",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <AccountCircleIcon />
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    lineHeight: "1.2",
                  }}
                >
                  <span
                    style={{
                      fontSize: "14px",
                      color: "#757575",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Hello, Sign in
                  </span>
                  <span
                    style={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      color: "#212121",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Account
                  </span>
                </div>
                <ArrowDropDownIcon />
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
      <div className="herosection" style={{ position: "relative" }}>
        <img
          src={cars24heropage}
          style={{ height: "500px", width: "100%", objectFit: "cover" }}
          alt="heropage"
        ></img>
      </div>
      <div
        className="heropagecontainer"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div
          className="heroconatiner"
          style={{
            display: "absolute",
            top: "50px",
            height: "268px",
            width: "1024px",
            backgroundColor: "#FFFFFf",
            borderRadius: "18px",
            border: "1px solid black",
          }}
        >
          <div
            className="contentcontainer"
            style={{
              paddingTop: "24px",
              display: "flex",
              justifyContent: "space-evenly",
              paddingRight: "56px",
              paddingLeft: "56px",
            }}
          >
            <div className="buycontent">
              <img
                src={buycar}
                style={{ paddingTop: "14px" }}
                alt="buycar"
              ></img>
              <p>
                Buy used <br />
                cars
              </p>
            </div>
            <div className="sellcontent">
              <img src={sellcar} style={{}} alt="sellcar"></img>
              <p>Sell car</p>
            </div>
            <div className="newcarcontent">
              <img
                src={newcar}
                style={{ paddingTop: "3px" }}
                alt="newcar"
              ></img>
              <p>New car</p>
            </div>
            <div className="carloancontent">
              <img
                src={carloan}
                style={{ paddingTop: "2px" }}
                alt="carloan"
              ></img>
              <p>Car loan</p>
            </div>
            <div className="vehiclehistorycontent">
              <img src={vehiclehistory} style={{}} alt="vehiclehistory"></img>
              <p>Vehicle history</p>
            </div>
            <div className="servicerepaircontent">
              <img src={servicerepair} style={{}} alt="servicerepair"></img>
              <p>
                Service & <br />
                repair
              </p>
            </div>
            <div className="insurancecontent">
              <img
                src={insurance}
                style={{ paddingTop: "5px" }}
                alt="insurance"
              ></img>
              <p>Insurance</p>
            </div>
            <div className="morecontent">
              <img
                src={more}
                style={{ paddingTop: "3px", paddingBottom: "14px" }}
                alt="more"
              ></img>
              <p>More</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
hiii