import './components/todo/todo.css'
import TodoData from './components/todo/TodoData'
import TodoNew from './components/todo/TodoNew'
import reactLogo from "./assets/react.svg";
import { useState } from 'react';

const App = () => {

  const [todoList, setTodoList] = useState([
    // { id: 1, name: "Learning React" },
    // { id: 2, name: "Watching Youtobe" }

  ])

  const deleteTodo= (id)=>{
    const newTodo= todoList.filter(item=>item.id!==id) // hàm filter quét qua todoList và chỉ giữ lại những id khác id truyền vào\
    setTodoList(newTodo)
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



export default App
