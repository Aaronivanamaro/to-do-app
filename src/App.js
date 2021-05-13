import './App.css';
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import User from './components/User'
import AddNewTodo from './components/AddNewTodo'
import Calendar from './components/Calendar'
import Projects from './components/Projects'
import Todos from './components/Todos'
import EditTodo from './components/EditTodo'


function App() {
  return (
    <div className="App">
      <Sidebar>
        <div className="side-container-1">
          <User />
          <AddNewTodo />
        </div>
        <div className="side-container-2">
          <Calendar />
          <Projects />
        </div>        
      </Sidebar>
      <Main>
        <Todos />
        <EditTodo />
      </Main>
    </div>
  );
}

export default App;
