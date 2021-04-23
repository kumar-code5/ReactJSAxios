
import React from 'react';
import axios from 'axios';

export default class AppGithub extends React.Component {
  state = {
    persons: []
  }

//   componentDidMount() {
//     axios.get(`https://api.github.com/users/kumar-code5`)
//       .then(res => {
//         const persons = res.data;
//         this.setState({ persons });
//       })
//       console.log(this.state.persons)
//   }


componentDidMount() {
    const url = 'https://api.github.com/users/kumar-code5';
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
            persons: data
        })
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      
        <div>
        {/* {JSON.stringify(this.state.persons)} */}
        <h1>{this.state.persons.name}</h1>
        <p>{this.state.persons.location}</p>
        <p>{this.state.persons.bio}</p>
        <p>{this.state.persons.company}</p>
        <img alt={this.state.persons.login} src={this.state.persons.avatar_url} />
      </div>
    )
  }
}

