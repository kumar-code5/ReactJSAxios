import React from 'react'



function Superheros() {
    const Heros = ["SuperMan", "IronMan", "Hulk","SpiderMan"];
   // return  Heros.map((hero, index) => <li key={index}>{hero}</li>);
    return (
        <div className="app">
          <div className="todo-list">
            {Heros.map((todo, index) => (
              <li key={index}>
              {todo}
              </li>
            ))}
          </div>
        </div>
      );

  }
export default Superheros


// function ReptileListItems() {
//     const Heros = ["SuperMan", "IronMan", "Hulk","SpiderMan"];
  
//     return  Heros.map((hero) => <li>{hero}</li>);
//   }