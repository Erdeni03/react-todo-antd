import {useState} from "react"
import {Typography, Layout, Button} from "antd"

import TodoClassicList from "./components/TodoClassicList"
import AddTodo from "./components/AddTodo"
function App() {
  const {Title} = Typography
  const {Header, Footer, Content} = Layout
  const [tasks, setTasks] = useState([
    {id: 1, title: "Text1", isCompleted: false},
    {id: 2, title: "Text2", isCompleted: false},
    {id: 3, title: "Text3", isCompleted: false},
    {id: 4, title: "Text4", isCompleted: false},
    {id: 5, title: "Text5", isCompleted: false}
  ])

  // Удаление задачи
  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  // Проверка на выполнение задачи
  const toggleIsCompleted = id => {
    setTasks(
      tasks.map(task => {
        if (task.id === id) {
          task.isCompleted = !task.isCompleted
        }
        return task
      })
    )
  }

  // Добавление задачи
  const addTask = task => {
    const id = Math.random() * 1000
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
    console.log(tasks)
  }

  // Сортировка задач
  const addSort = () => {
    setTasks(tasks.sort((a, b) => a.title.localeCompare(b.title)))
  }

  return (
    <Layout>
      <Header>
        <Title>TO-DO</Title>
        <Title level={2}>
          Mode:{" "}
          <Button ghost className="app-btn">
            CLASSIC
          </Button>
        </Title>
      </Header>
      <Content>
        <div className="app-background"></div>
        <AddTodo onAdd={addTask} />
        <TodoClassicList
          tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleIsCompleted}
          onSort={addSort}
        />
      </Content>
      <Footer>
        <Title level={2}>LIST</Title>
      </Footer>
    </Layout>
  )
}

export default App
