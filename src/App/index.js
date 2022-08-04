// import './App.css';

import React from "react";
import { TodoProvider } from "./TodoContext";
import { AppUI } from "./AppUI";

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar curso', completed: false},
//   { text: 'llorar con la llorona', completed: false },
//   { text: 'lalala', completed: false }
// ];

function App() {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
