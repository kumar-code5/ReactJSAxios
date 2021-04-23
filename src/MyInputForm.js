import React from "react";
export default class MyInputForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = { username: '',age:'' };
    }
    mySubmitHandler = (event) => {
      event.preventDefault();
      console.log(this.state)
      console.table(this.state)
      alert(`You are submitting Name:  `+(this.state.username)+' Age : '+(this.state.age) );
     // alert("You are submitting " + this.state.age);
    }
    myChangeHandlerName = (event) => {
      this.setState({username: event.target.value});
      console.table(this.state)
    }

    myChangeHandlerAge = (event) => {
      this.setState({age: event.target.value});
    }


    render() {
      return (
        <form onSubmit={this.mySubmitHandler}>
        <h1>Hello {this.state.username}</h1>
        <h1>Age {this.state.age}</h1>
        <p>Enter your name, and submit:</p>
        <input
          type='text' name='Name'
          onChange={this.myChangeHandlerName}
        />
         <input
          type='text' name='age'
          onChange={this.myChangeHandlerAge}
        />

        <input
          type='submit'
        />
        </form>
      );
    }
  }