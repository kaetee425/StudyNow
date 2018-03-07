import React, { Component } from 'react'
import feather from './feather.png'
import "./Navpills.css"

const Navpills = props => 

  <ul className="nav nav-pills nav-justified">

    <li>
      <img src={feather} height="80" width="80" />
    </li>

    <li role="presentation"
      onClick={() => props.handlePageChange("Mapping")}
      className={props.currentPage === "Mapping" ? "active" : ""}
    >
      <a>Mapping</a>
    </li>
    <li
      onClick={() => props.handlePageChange("Locations")}
      className={props.currentPage === "Locations" ? "active" : ""}
    >
      <a>Locations</a>
    </li>
    
    <li role="presentation"
      onClick={() => props.handlePageChange("Chat")}
      className={props.currentPage === "Chat" ? "active" : ""}
    >
      <a>Chat</a>
    </li>

    <li
      onClick={() => props.handlePageChange("Bio")}
      className={props.currentPage === "Bio" ? "active" : ""}
    >
      <a>Bio</a>
    </li>
  </ul>;

export default Navpills;
