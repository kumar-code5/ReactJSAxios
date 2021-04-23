import logo from './logo.svg';
import './App.css';
import Form from  './Form'
import React from 'react';
import CompanyList from './components/CompanyList'
export default  class AppCompanyInfo extends React.Component {
  state = {
    companyinfoarray: [],
  };

  addCompany = (companyinfo) => {
  	this.setState(prevState => ({
    	companyinfoarray: [...prevState.companyinfoarray, companyinfo],
    }));
  };

	render() {
  	return (
    	<div>
        <Form onSubmit={this.addCompany} />
        <CompanyList companyinfoarray={this.state.companyinfoarray} />
    	</div>
    );
  }	
}