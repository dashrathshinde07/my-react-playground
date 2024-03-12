import "./App.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import TodoItem2 from "./components/TodoItem2";

function App() {
  return (
    <center className="todo-container">
      <AppName />

      <AddTodo />

      <div className="items-container">
        <TodoItem />

        <TodoItem2 />
      </div>
    </center>
  );
}

export default App;
