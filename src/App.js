import "./assets/main.css";
import TodoList from "./TodoList";  

function App() {
  return (
    <section className="app-section">
      <div className="header">
        <h1 className="title"><strong>Task Helper</strong></h1>
      </div>
      <div className="content">
        <TodoList /> 
      </div>
    </section>
  );
}

export default App;
