
import axios from 'axios';
import React, { Component } from 'react'
export default class Company extends React.Component {
	render() {
  	const p = this.props;
  	return (
    	<div className="company">
        <span className="companytext">&#x3C;Company /&#x3E;</span>
    	  <img src={p.avatar_url} />
        <div className="companyinfo">
          <div>Name: {p.name}</div>
          <div>Email: {p.email}</div>
          <div>Repos: {p.company}</div>
          <div>Repos: {p.location}</div>
          <div>Bio: {p.bio}</div>
          <div>Repos: {p.public_repos}</div>
        </div>
    	</div>
    );
  }
}