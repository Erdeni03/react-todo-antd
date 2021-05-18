import {DeleteOutlined, CheckCircleOutlined} from "@ant-design/icons"

const TodoClassicItem = ({item, onDelete, onToggle}) => {
  console.log("item", item)
  const classNames = []
  const styleActive = []
  if (item.isCompleted) {
    classNames.push("done")
    styleActive.push("active")
  }

  return (
    <li className="ant-list-item" key={item.id}>
      <span className={classNames.join(" ")}>{item.title}</span>

      <div className="app-wrap">
        <CheckCircleOutlined
          className={styleActive}
          onClick={() => onToggle(item.id)}
        />
        <DeleteOutlined onClick={() => onDelete(item.id)} />
      </div>
    </li>
  )
}

export default TodoClassicItem
