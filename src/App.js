import React, {Component} from 'react';
import Contacts from './components/contacts';

class App extends Component {
    render() {
        return (
            <Contacts contacts={this.state.contacts} />
        )
    }
    state = {
        contacts: []
    };

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then((data) => {
                this.setState({ contacts: data })
            })
            .catch(console.log)
    }
}

export default App;


// import logo from './logo.svg';
// import './App.css';
// import Form from  './Form'
// import React from 'react';
// import CompanyList from './CompanyList';

// // class App extends React.Component {
// //   doSomething = (companyinfo) => {
// //     console.log(companyinfo);
// //     console.table(companyinfo)
// //   };
// // 	render() {
// //   	return (
// //     	<div>
// //         <Form onSubmit={this.doSomething} />
// //     	</div>
// //     );
// //   }	
// // }
// // export default App;

// export default  class App extends React.Component {
//   state = {
//     companyinfoarray: [],
//   };

//   addCompany = (companyinfo) => {
//   	this.setState(prevState => ({
//     	companyinfoarray: [...prevState.companyinfoarray, companyinfo],
//     }));
//   };

// 	render() {
//   	return (
//     	<div>
//         <Form onSubmit={this.addCompany} />
//         <CompanyList companyinfoarray={this.state.companyinfoarray} />
//     	</div>
//     );
//   }	
// }
