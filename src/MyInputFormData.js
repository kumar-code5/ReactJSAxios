import { useState } from 'react';
import React, { Component } from 'react';
const COLORS = ['white', 'red', 'blue', 'black', 'cream'];

function MyInputFormData() {
  const [values, setValues] = useState({
    name: '', color: '', age: '', habits: '' 
  });

  const set = name => {
    return ({ target: { value } }) => {
      setValues(oldValues => ({...oldValues, [name]: value }));
    }
  };

  return (
    <form>
      <h2>Register Your Cat</h2>

    <label>Name*:</label>
    <input type="text" name="Name" value={this.state.Name} 
    onChange={this.onChangeName}  
    placeholder="Enter Name" /> 
    <label>RollNo*:</label>

    <input type="text" name="RollNo" 
    value={this.state.RollNo} 
    onChange={this.onChangeRollNo}
     placeholder="Enter RollNo" />  


      <label>Color*:</label>
      <select required value={values.color} onChange={set('color')}>
        <option value="">Select color</option>
        {COLORS.map(c => <option key={c}>{c}</option>)}
      </select>

      <label>Age*:</label>
      <input  type="number" required min="1" value={values.age} onChange={set('age')} />

      <label>Habits:</label>
      <textarea value={values.habits} onChange={set('habits')} />

      <button type="submit">Submit</button>
    </form>
  );
}

// export default function App() {
//   return (
//     <div className="App">
//       <RegisterYourCatForm />
//     </div>
//   );
// }


export default MyInputFormData;
