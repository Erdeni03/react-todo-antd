import {useState, useMemo} from "react"
import {Typography, Layout, Button} from "antd"
import {SyncOutlined} from "@ant-design/icons"
import uuid from "uuid/dist/v4"
import TodoClassicList from "./components/TodoClassicList"
import TodoDraggable from "./components/TodoDraggable"
import AddTodo from "./components/AddTodo"
function App() {
  const {Title} = Typography
  const {Header, Footer, Content} = Layout
  const [tasks, setTasks] = useState([
    {id: uuid(), title: "Text1", isCompleted: false},
    {id: uuid(), title: "Text2", isCompleted: false},
    {id: uuid(), title: "Text3", isCompleted: false},
    {id: uuid(), title: "Text4", isCompleted: false},
    {id: uuid(), title: "Text5", isCompleted: false}
  ])
  const columnsFromBackend = useMemo(
    () => ({
      [uuid()]: {
        name: "Active",
        items: tasks
      },
      [uuid()]: {
        name: "Completed",
        items: []
      }
    }),
    [tasks]
  )
  //   const columns = useMemo(() => ({
  //     active: {
  //        name: 'Active',
  //        items: tasks
  //     },
  //     completed: {...}
  //  }), [tasks]);

  // ddddddddddddddddddddddddddddddddddddddddddddddd

  // const itemsFromBackend = [
  //   {id: uuid(), content: "First task"},
  //   {id: uuid(), content: "Second task"},
  //   {id: uuid(), content: "Third task"},
  //   {id: uuid(), content: "Fourth task"},
  //   {id: uuid(), content: "Fifth task"}
  // ]

  let [isMode, setIsMode] = useState(false)
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
    const id = uuid()
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  // Сортировка задач
  const addSort = () => {
    setTasks([...tasks].sort((a, b) => a.title.localeCompare(b.title)))
  }

  return (
    <Layout>
      <Header>
        <Title>TO-DO</Title>
        <Title level={2}>
          Mode:{" "}
          <Button
            ghost
            className={isMode ? "app-btn-classic" : "app-btn-drag"}
            onClick={() => setIsMode((isMode = !isMode))}
          >
            {isMode ? "DRAGGABLE" : "CLASSIC"}
            <SyncOutlined className={isMode ? "mode" : "not-mode"} />
          </Button>
        </Title>
      </Header>
      <Content>
        <div className="app-background"></div>
        <AddTodo onAdd={addTask} />
        {isMode ? (
          <TodoClassicList
            tasks={tasks}
            onDelete={deleteTask}
            onToggle={toggleIsCompleted}
            onSort={addSort}
          />
        ) : (
          <TodoDraggable
            columnsFromBackend={columnsFromBackend}
            onDelete={deleteTask}
            onToggle={toggleIsCompleted}
            onSort={addSort}
          />
        )}
      </Content>
      <Footer>
        <Title level={2}>LIST</Title>
      </Footer>
    </Layout>
  )
}

export default App
