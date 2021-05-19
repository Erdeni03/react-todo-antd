import React, {useState} from "react"
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd"

import {Card} from "antd"
import {DeleteOutlined} from "@ant-design/icons"

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return
  const {source, destination} = result

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId]
    const destColumn = columns[destination.droppableId]
    const sourceItems = [...sourceColumn.items]
    const destItems = [...destColumn.items]
    const [removed] = sourceItems.splice(source.index, 1)
    destItems.splice(destination.index, 0, removed)
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems
      }
    })
  } else {
    const column = columns[source.droppableId]
    const copiedItems = [...column.items]
    const [removed] = copiedItems.splice(source.index, 1)
    copiedItems.splice(destination.index, 0, removed)
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems
      }
    })
  }
}

function Fake({onDelete, columnsFromBackend}) {
  const [columns, setColumns] = useState(columnsFromBackend)
  return (
    <div className="app-wrap">
      <DragDropContext
        onDragEnd={result => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <Card
              title={column.name}
              //   extra={<a href="#">More</a>}
              style={{width: 400}}
              key={columnId}
            >
              <Droppable droppableId={columnId} key={columnId}>
                {(provided, snapshot) => {
                  return (
                    <div
                      className="ant-card-body"
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      style={{
                        background: snapshot.isDraggingOver ? "#bae7ff" : ""
                      }}
                    >
                      {column.items.map((item, index) => {
                        return (
                          <Draggable
                            key={item.id}
                            draggableId={item.id}
                            index={index}
                          >
                            {(provided, snapshot) => {
                              return (
                                <div
                                  className="todo-drag-item"
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  style={{
                                    backgroundColor: snapshot.isDragging
                                      ? "#263B4A"
                                      : "",

                                    ...provided.draggableProps.style
                                  }}
                                >
                                  {item.title}
                                  <DeleteOutlined
                                    onClick={() => onDelete(item.id)}
                                  />
                                </div>
                              )
                            }}
                          </Draggable>
                        )
                      })}
                      {provided.placeholder}
                    </div>
                  )
                }}
              </Droppable>
            </Card>
          )
        })}
      </DragDropContext>
    </div>
  )
}

export default Fake
