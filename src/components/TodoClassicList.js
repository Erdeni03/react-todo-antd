import {useState} from "react"
import {List, Typography, Button} from "antd"
import TodoClassicItem from "./TodoClassicItem"
import {SortAscendingOutlined} from "@ant-design/icons"

const FILTER_MAP = {
  Все: () => true,
  Активные: task => !task.isCompleted,
  Выполненные: task => task.isCompleted
}

const FILTER_NAMES = Object.keys(FILTER_MAP)

const TodoClassicList = ({tasks, onDelete, onToggle, onSort}) => {
  const [filter, setFilter] = useState("Все")

  // const taskList = tasks
  //   .filter(FILTER_MAP[filter])
  //   .map(item => (
  //     <TodoClassicItem item={item} onDelete={onDelete} onToggle={onToggle} />
  //   ))

  const filterList = FILTER_NAMES.map(name => {
    return (
      <Button aria-pressed="true" key={name} onClick={() => setFilter(name)}>
        {name}
      </Button>
    )
  })
  const {Text} = Typography
  return (
    <div>
      <List
        size="large"
        header={
          <div className="app-wrap">
            <Text strong>Кол-во задач {tasks.length}</Text>
            <SortAscendingOutlined onClick={() => onSort()} />
          </div>
        }
        footer={
          <>
            <span className="mr-2">Показать: </span>
            {filterList}
          </>
        }
        bordered
        dataSource={tasks.filter(FILTER_MAP[filter])}
        renderItem={item => (
          <TodoClassicItem
            key={item.id}
            item={item}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        )}
      />
    </div>
  )
}

export default TodoClassicList
