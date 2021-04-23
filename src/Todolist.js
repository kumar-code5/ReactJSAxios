import React from "react";
import "./App.css";

function Todo({ todo }) {
  return (
    <div className="todo">
      {todo.text}
    </div>
  );
};

const Button = () => {
  return <button>Hello world</button>
}

const people = [];



function Todolist() {
  const [todos, setTodos] = React.useState([
    { text: "Learn about React" },
    { text: "Meet friend for lunch" },
    { text: "Build really cool todo app" }
  ]);


  const [carInfo, setCarInfo] = React.useState([
    { Rating: 1, CarBrand: "Mercedes-Benz" , Likes: 12321},
    { Rating: 2, CarBrand: "BMW", Likes: 111},
    { Rating: 3, CarBrand: "Ferrai" , Likes: 231},
    { Rating: 4, CarBrand: "Bugatti", Likes: 121}
  ]);

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
          />
        ))}

        {carInfo.map((car, index) => (
              <li key={index}>
              {car.CarBrand}
              </li>
            ))
        }
        <Button />

      </div>
    </div>
  );
}

export default Todolist;