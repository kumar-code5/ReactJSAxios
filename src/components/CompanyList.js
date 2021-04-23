
import Company from './Company';
import React, { Component } from 'react'
export default class CompanyList extends React.Component {
    render() {
        const p = this.props;
        return (
            <div className="companylist">
            <span className="companylisttext">&#x3C;CompanyList /&#x3E;</span>
            {p.companyinfoarray.map(companyinfo => <Company key={companyinfo.id} {...companyinfo}/>)}
            </div>
        );
    }
}


