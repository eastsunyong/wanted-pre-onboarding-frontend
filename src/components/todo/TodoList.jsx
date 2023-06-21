import TodoBtn from "./TodoBtn"
import styled from "styled-components"

const TodoList = ({ lists, updateTodo, deleteTodo, updateDone}) => {
  return (
    <>
      {lists?.map(list => {
        return (
          <Li key={list.id}>
            <TodoBtn
              updateTodo={updateTodo}
              list={list}
              deleteTodo={deleteTodo}
              updateDone={updateDone}
            />
          </Li>
        )
      })}
    </>
  )
}

const Li = styled.label`
  display: flex;
  margin-bottom: 3rem;
`

export default TodoList