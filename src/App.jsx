
import Herder from './components/layout/herder';
import Footer from './components/layout/footer';
import { Outlet } from 'react-router-dom';
const TodoApp = () => {
  const [todoList, setTodoList] = useState([
    // { id: 1, name: "Learning React" },
    // { id: 2, name: "Watching Youtobe" }

  ])


  var a = 0;

  const deleteTodo = (id) => {
    const newTodo = todoList.filter(item => item.id !== id) // hàm filter quét qua todoList và chỉ giữ lại những id khác id truyền vào\
    setTodoList(newTodo)
    a = 1;
  }

  const addNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1, 1000000),
      name: name
    }
    setTodoList([...todoList, newTodo])// ... là copy lại các phần tử trước của todoList
  }

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return (
  
  <div className="todo-container">
    <div className="todo-title">Todo List</div>
    <TodoNew
      addNewTodo={addNewTodo}
    />
    {todoList.length > 0 ?
      <TodoData
        todoList={todoList}
        deleteTodo={deleteTodo}
      />
      :
      <div className='todo-image' >
        <img className='logo' src={reactLogo} />
      </div>
    }

  </div>
  
)
}
const App = () => {


  return (
    <>
      <Herder />

      <Outlet />
      <Footer />
    </>
  )
}

export default App
