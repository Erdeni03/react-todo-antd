import {Input, Button} from "antd"
import {PlusOutlined} from "@ant-design/icons"
import {useState} from "react"
const AddTodo = ({onAdd}) => {
  let [title, setTitle] = useState("")
  let [isCompleted, setIsCompleted] = useState(false)

  const onSubmit = e => {
    e.preventDefault()

    if (!title.trim()) {
      alert("Пожалуйста добавьте описание к задаче!")
      return
    }

    onAdd({title, isCompleted})

    setTitle("")
    setIsCompleted(false)
  }
  return (
    <form className="app-flex" onSubmit={onSubmit}>
      <Input
        placeholder="Описание задачи..."
        value={title}
        onChange={e => setTitle(e.target.value)}
      />

      <Button
        type="primary"
        htmlType="submit"
        icon={<PlusOutlined />}
        size="large"
      >
        Добавить
      </Button>
    </form>
  )
}

export default AddTodo
