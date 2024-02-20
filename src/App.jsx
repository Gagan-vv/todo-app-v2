import AppName from "./components/AppName";
import AppTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    //console.log(`New Item added: ${itemName} date: ${itemDueDate}`);

    //setTodoItems((curValue) => {
    //  const newTodoItems = [
    //    ...curValue,
    //    { name: itemName, dueDate: itemDueDate },
    //  ];
    //  return newTodoItems;
    //});
    //ORR

    setTodoItems((curValue) => [
      ...curValue,
      { name: itemName, dueDate: itemDueDate },
    ]);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AppTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage />}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
    </center>
  );
}

export default App;
