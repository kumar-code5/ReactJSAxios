import React, { Component } from 'react'

export default class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
      }
    
      componentDidMount() {
        setTimeout(() => {
            this.setState({date: new Date()})
          }, 1000)
          console.log(` I'm from componentDid Mount: clock `)
      }

      componentDidUpdate() {
        document.getElementById("mydiv").innerHTML =
        "The updated favorite is " + this.state.favoritecolor;
        console.log(` I'm from componentDidUpdate Mount: Header `)
      }
    
      componentWillUnmount(){
        console.log(` I'm from componentWillUnmount Mount: clock `)
        alert(`I''m from componentWillUnmount Mount'`);       
    }
    
      render() {
        return (
          <div>
            <h1>Hello, world!</h1>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
          </div>
        );
      }
    }
