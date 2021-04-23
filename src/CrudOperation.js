import React from 'react'
import axios from 'axios';
const API_URL = 'http://localhost:5000/users';

class CrudOperation extends React.Component {
  state = {
    Sports:[],
    postId:'',
    users:[]
  }
      
  GetAllFetch = () => {
    console.log(`-----Data coming form  fetch call -----`);

    console.log(`-----Approach-1 -----`);
    fetch(API_URL)
    .then((response) => response.json())
    .then((result) => console.log('This is from Approach-1 log data', result));

    console.log(`-----Approach-2 -----`);
    fetch(API_URL)
    //Single line code
   //.then(response => response.json())
    .then(response => {
      response.json();
      console.log(response)
    })
    .then((result) => {
      console.log('This is from Approach-2 table data')
      this.setState({
        users: result
      });
      console.table(this.state.users)
    });
  }
  
  GetAllAxios= () => 
  {
    console.log(`-----GET DATA FROM AXIOS() CALL  -----`);
    axios.get(API_URL)
    .then(res => {
      console.log(`-----Approach-1 -----`);
      const users = res.data;
      this.setState({ users:users });
      console.table(users)
    });
  }

  PostDataViaAxios()
  {
    // Simple POST request with a JSON body using axios
    console.log(`-----POST DATA FROM AXIOS() CALL  -----`);
    console.log(`-----Approach-1 -----`);
    const userInfo =  JSON.stringify({ 
 
    first_name: "Kumar",
    last_name: "Palani",
    email: 'pkumar.naidu5@gmail.com'
  });

  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userInfo)
  };
  const response = axios.post(API_URL,userInfo,{headers:{"Content-Type" : "application/json"}});

      try {
        console.log(`-----POST DATA FROM AXIOS() CALL  -----`);
        console.log(`-----Approach-2 -----`);
        let result =  axios.post(          
        API_URL,
          {                                     // data if post, put
            first_name: "Kumar",
            last_name: "Palani",
            email: 'pkumar.naidu5@gmail.com'
          }
        );
        console.log(result.response);
      } catch (error) {
        console.error(error.response);     // NOTE - use "error.response.data` (not "error")
      }
}

  PostDataViaFetch=()=>{
    const recipeUrl = API_URL;
    const postBody = {
      first_name: "Kumar",
      last_name: "Palani",
      email: 'pkumar.naidu5@gmail.com'
    };

    const requestMetadata = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postBody)
    };

    fetch(API_URL, requestMetadata)
        .then(reposnse => 
          {
            console.log(reposnse)
            reposnse.json()
          })
        .then(result => {
        console.table(result)
            this.setState({ users:result });
        });
   }

 
   UpdateData=()=>{
     //${selectValue}`
     var updateID=228;
     fetch(API_URL+'/'+updateID, {
			method: 'PUT',
			body: JSON.stringify({
        id:228,
				first_name: "Kumar",
        last_name: "Palani",
        email: 'pkumar.naidu5@Apple.com'
			}),
			headers: {
			  "Content-type": "application/json; charset=UTF-8"
			}
		}).then(response => {
						return response.json()
		}).then(json => {
			console.log(json)
			this.setState({
				user:json
			});
		})
   }


    render() {
      return (
      <div>
      <button onClick={this.GetAllFetch}>GetAll Data by Fetch !</button>
      <button onClick={this.GetAllAxios}>GetAll Data by Axios !</button>
      <br/>    <br/>
      <button onClick={this.PostDataViaFetch}> Post Data By Fecth  !</button>  
      <button onClick={this.PostDataViaAxios}> Post Data By Axios  !</button> 
      <br/>    <br/>
      <button onClick={this.GetbyID}>Getby ID Fecth!</button>  
      <button onClick={this.GetbyID}>Getby ID Axios!</button> 
      <br/>    <br/>
      <button onClick={this.UpdateData}>Update Data By Fecth !</button> 
      <button onClick={this.UpdateData}>Update Data By Axios !</button>   
      <br/>    <br/>

      </div>
     
      );
    }
  }

  export default CrudOperation




