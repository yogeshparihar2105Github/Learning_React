import TodoHeader from './components/TodoHeader'
import TodoList from './components/TodoList'
import AddTodoButton from './components/AddTodoButton'
import "./styles.css"

function App() {
  return (
    <>
    <div className='todo-container'>
      <TodoHeader />
      <TodoList />
      <TodoList />
      <TodoList />
      <TodoList />
      <AddTodoButton />
    </div>
      
    </>
  )
}

export default App
