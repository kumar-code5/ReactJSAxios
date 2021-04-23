import React, { Component } from 'react'

export default class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {favoritecolor: "red"};
    }

    componentDidMount() {
      setTimeout(() => {
        this.setState({favoritecolor: "yellow"})
      }, 6000)
      console.log(`I'm from componentDid Mount: Header`)
      alert(` I'm from componentDidMount: Header`);       
    }

    componentDidUpdate() {
      document.getElementById("mydiv").innerHTML =
      "The updated favorite is " + this.state.favoritecolor;
      console.log(` I'm from componentDidUpdate Mount: Header `)
      alert(`I''m from componentDidUpdate Mount'`);       
    }

    componentWillUnmount(){
        console.log(` I'm from componentWillUnmount Mount: clock `)
        alert(`I''m from componentWillUnmount Mount`);       
    }

    render() {
      return (
        <div>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <div id="mydiv"></div>
        </div>
      );
    }
  }