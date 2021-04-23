import React, { Component } from 'react'
import axios from 'axios';

export default class Countries extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        countries: [],
        colours: {},
        selectValue:"",
        persons:[],
        error:false
      };
    }

    componentDidMount() {
      this.setState({
        countries: [
          {id: 'iamshaunjp', name: 'Afghanistan'},
          {id: 'kumar-code5', name: 'Åland Islands'},
          {id: 'bradtraversy', name: 'Albania'}
        ]
      });
    }


    componentDidUpdate() {
      // document.getElementById("mydiv").innerHTML =
      // "The updated favorite is " + this.state.selectValue;
      // console.log(` I'm from componentDidUpdate Mount: Header `)
    }
      
  //     axios.get(`https://api.github.com/users/kumar-code5`)
  //     .then(res => {
  //       const persons = res.data;
  //       this.setState({ persons });
  //       this.setState({ isLoggedIn:false });
  //     })
  // {console.log(persons)} 
  //   }

  //   componentWillUnmount(){
  //     console.log(` I'm from componentWillUnmount Mount: clock `)
  //     alert('User has been deleted');       
  // }

  
  
  
    handleChange = (e) => {
      let idx = e.target.selectedIndex;
      let dataset = e.target.value;
      console.log('ISD Code: ', dataset);
      this.setState({ selectValue: e.target.value });
       let selectValue=e.target.value
      //fetch(`https://api.github.com/users/${inputVal}`)
      console.log(selectValue)
      //axios.get(`https://api.github.com/users/kumar-code5`)
      axios.get(`https://api.github.com/users/${selectValue}`)
      .then(res => {
        const persons = res.data;
        // this.setState({ persons });
        this.setState({ isLoggedIn:true });
        this.setState({error: true})
        this.setState({ persons:persons });
     //   console.log(persons);
        console.log(this.state.error);
      })
   
    }

  
    render () {
      const { countries } = this.state;
      let countriesList = countries.length > 0
          && countries.map((item, i) => {
        return (
          <option key={i} value={item.id}>{item.name}</option>
        )
      }, this);
      //{ console.log(this.state.persons);}
      if(this.state.error) {
        return (
         
          <div>
            <select  value={this.state.selectValue}   onChange={this.handleChange}>
            {countriesList}
          </select>
          <div style={{color: "red"}}> Selected value is : {this.state.selectValue}</div>
          <div id="mydiv"></div>

         <h1>{this.state.persons.name}</h1>
         <p>{this.state.persons.location}</p>
         <p>{this.state.persons.bio}</p>
         <p>{this.state.persons.company}</p>
        <img alt={this.state.persons.login} src={this.state.persons.avatar_url} />
          {/* {JSON.stringify(this.state.persons)}
        <h1>hiada </h1> */}
      
          </div>
        )
      }
      else
      {
      return (
        <div>
          <select  value={this.state.selectValue}   onChange={this.handleChange}>
            {countriesList}
          </select>
          <div>Selected value is : {this.state.selectValue}</div>
          <div id="mydiv"></div>
    </div>
      );
    }
}
}
  
