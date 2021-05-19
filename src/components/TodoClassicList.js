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
  const {Text} = Typography

  const filterList = FILTER_NAMES.map(name => {
    return (
      <Button aria-pressed="true" key={name} onClick={() => setFilter(name)}>
        {name}
      </Button>
    )
  })
  return (
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
  )
}

export default TodoClassicList
