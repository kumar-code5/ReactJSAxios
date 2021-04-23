import React, { Component } from 'react'
import axios from 'axios';

export default class Githubprofiledetails extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        selectValue:"",
        personNames:[],
        personsDetails:[],
        display:false
      };
    }

    componentDidMount() {
      this.setState({
        personNames: [
          {id: 'iamshaunjp', name: 'iamshaunjp'},
          {id: 'kumar-code5', name: 'kumar-code5'},
          {id: 'bradtraversy', name: 'bradtraversy'}
        ]
      });
    }

  
    handleChange = (e) => {
      let idx = e.target.selectedIndex;
      let Value = e.target.value;
      this.setState({ selectValue: Value });
      let selectValue=e.target.value
      axios.get(`https://api.github.com/users/kumar-code5`)
      //axios.get(`https://api.github.com/users/${selectValue}`)
      .then(res => {
        const personsDetails = res.data;
        const longeur = res.data.length;
        alert(res.data.length)
        this.setState({display: true})
        this.setState({ personsDetails:personsDetails });
        //console.log(this.state.display);
        console.log('length',longeur)
      })
    }


    // componentDidMount() {
    //     const url = 'https://api.github.com/users/kumar-code5';
    //     fetch(url)
    //       .then((response) => {
    //         return response.json();
    //       })
    //       .then((data) => {
    //         this.setState({
    //             persons: data
    //         })
    //       })
    //       .catch((error) => console.log(error));
    //   }

  
    render () {
      const { personNames } = this.state;
      
      let personNamesList = personNames.length > 0
          && personNames.map((item, i) => {
        return (
          <option key={i} value={item.id}>{item.name}</option>
        )
      }, this);
      //console.log(personNames)
     // console.log(personsDetails)

      if(this.state.display) {
      //  console.log(this.state.personsDetails.length)
      const { personsDetails } = this.state;
     // console.log(personsDetails.length)
     personsDetails.length=1;
      //console.log(personsDetails.length)
     // console.log(personNames.length)

        return (
          <div style={{color: "red"}}>
         <select  value={this.state.selectValue}   onChange={this.handleChange}>
            {personNamesList}
          </select>
          <div style={{color: "red"}}> Profile deatils of  : {this.state.selectValue}</div>
         <h1>{this.state.personsDetails.name}</h1>
         <p>{this.state.personsDetails.location}</p>
         <p>{this.state.personsDetails.bio}</p>
         <p>{this.state.personsDetails.company}</p>
         <img alt={this.state.personsDetails.login} src={this.state.personsDetails.avatar_url} />
          {/* {JSON.stringify(this.state.persons)}
           <h1>Check if condition </h1> */}
           <p> dfs {this.state.personsDetails.length}</p>
           {/* {console.log(this.state.personsDetails.length)} */}
          </div>
        )
      }
      else
      {
      return (
        <div>
          <select  value={this.state.selectValue}   onChange={this.handleChange}>
            {personNamesList}
          </select>
          <div>Selected value is : {this.state.selectValue}</div>
          <div id="mydiv"></div>
    </div>
      );
    }
}
}
  
