import "./App.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";

function App() {


 
  return (
    <center className="todo-container">
      <AppName />

      <AddTodo />

      <TodoItem/>

      <div className="container text-center">
        <div className="row">
          <div className="col-6">Go to college</div>
          <div className="col-4">04/10/2023</div>
          <div className="col-2">
            <button type="button" className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </center>
  );
}

export default App;
