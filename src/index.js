import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
// import Mycomponent from './Mycomponent';
// import Mycomponent2 from  './MyComponent2';
// import Clock from  './Clock'
 import Header from  './Header'
import Githubprofiledetails from  './Githubprofiledetails'
import AppCompanyInfo from  './AppCompanyInfo'

//import AppGithub from  './AppGithub'
import App from  './App'
import Superheros from  './Superheros'
// import ReactTabledata from  './ReactTabledata'



import Todolist from  './Todolist'
import Mycomponent2 from './MyComponent2';
import MyInputForm from './MyInputForm';

import MyInputFormData from './MyInputFormData';
import CrudOperation from './CrudOperation';

ReactDOM.render(
  <React.StrictMode>
  <CrudOperation  />,

   {/* <Mycomponent/>,
   <Mycomponent2/>, */}
  {/* <Clock />    , */}
  {/* <Header/>, */}
  {/* <Githubprofiledetails/>, */}
  {/* <AppGithub/> */}
  {/* <AppCompanyInfo/> */}

  {/* <Superheros/>, */}

  {/* <Todolist/>, */}
  {/* <MyInputForm/>, */}

  {/* <MyInputFormData /> */}



  {/* <ReactTabledata />, */}
  </React.StrictMode>,


  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
