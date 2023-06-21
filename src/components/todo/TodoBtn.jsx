import React, { useState } from 'react'
import TodoText from './TodoText'

const TodoBtn =({ updateTodo, list, deleteTodo, updateDone }) => {
  const [toggle, setToggle] = useState(true)
  const [modify, setModify] = useState(list.todo)


  return (
    <>
      <TodoText
        updateDone={updateDone}
        updateTodo={updateTodo}
        list={list}
        toggle={toggle}
        modify={modify}
        setModify={setModify}
    
      />
      {toggle ? (
        <>
          <button
            data-testid='modify-button'
            onClick={() => setToggle(false)}>
            수정
          </button>
          <button
            data-testid='delete-button'
            onClick={() => deleteTodo(list)}>
            삭제
          </button>
        </>
      ) : (
        <>
          <button
            data-testid='submit-button'
            onClick={() => {
              setToggle(true)
              updateTodo(list, modify)
            }}>
            제출
          </button>
          <button onClick={() => {setToggle(true); setModify(list.todo)}} data-testid='cancel-button'>취소</button>
        </>
      )}
    </>
  )
}

export default TodoBtn