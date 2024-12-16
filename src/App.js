import React, { useState } from 'react';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';

function App() {

  // Step 1: Create state to store the to-do list
  const [toDos, setToDos] = useState([]);

  // Step 2: Create a function to add a new to-do to the list
  const addToDo = (newToDo) => {
    setToDos([...toDos, newToDo]); // Add the new to-do to the existing list
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial"}} >
      <h1>My To-Do List</h1>

      {/* ToDoForm Component */}
      {/* Step 3: Pass the addToDo function to ToDoForm as a prop */}
      <ToDoForm onAddToDo={addToDo} />

      {/* ToDoList Component */}
      <ToDoList toDos={toDos} />


    </div>
  );
}

export default App;
