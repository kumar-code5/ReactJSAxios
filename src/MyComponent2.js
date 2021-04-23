import React from 'react';
class Mycomponent2 extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: localStorage.getItem('someRandomValue') || '',
      };
    }
    componentDidUpdate() {
      localStorage.setItem('someRandomValue', this.state.value);
      console.log(`I''m from componentDidUpdate`)
    }
    onChange = event => {
      this.setState({ value: event.target.value });
      console.log(`I''m from onChange`)
    };
    render() {
      return (
        <div>
          <h1>Just some random class component!</h1>
          <input
            value={this.state.value}
            type="text"
            onChange={this.onChange}
          />
          <p>{this.state.value}</p>
        </div>
      );
    }
  }
  export default Mycomponent2;
