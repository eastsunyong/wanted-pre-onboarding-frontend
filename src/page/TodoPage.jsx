import { useState, useEffect } from 'react'
import request from 'api/axios'
import styled from 'styled-components'

import TodoInput from 'components/todo/TodoInput'
import TodoList from 'components/todo/TodoList'

const TodoPage =() => {
  const [todo, setTodo] = useState('')
  const [lists, setLists] = useState([])

  //토큰 불러오기
  let token = `Bearer ${localStorage.getItem('access_token')}`;

  //Todo 생성
  const createTodo = async (e) => {
    e.preventDefault()
    if(todo === '') {
      return
    }
    
    try {
      await request.post('todos', { todo: todo }, {headers:{Authorization: token}} )
      request.get('todos', {headers:{Authorization: token}})
             .then(response => { setLists(response.data)})
             .catch(error => console.log(error))
    } catch (error) {
      console.log(error)
    }
    e.target.reset()
    setTodo('')
  }

  //Todo 상태
  const updateDone = async (list) => {
    const { id, todo, isCompleted } = list

    try {
      await request.put(`todos/${id}`, {todo: todo,isCompleted: !isCompleted,}, {headers:{Authorization: token}})
      request.get('todos', {headers:{Authorization: token}})
             .then(response => {setLists(response.data)})
             .catch(error => console.log(error))
    } catch (error) {
      console.log(error)
    }
  }

  //Todo 수정
  const updateTodo = async (list, modify) => {
    const { id, isCompleted } = list

    try {
      await request.put(`todos/${id}`, { todo: modify, isCompleted: isCompleted}, {headers:{Authorization: token}})
      request.get('todos', {headers:{Authorization: token}})
             .then(response => {setLists(response.data)})
             .catch(error => console.log(error))
    } catch (error) {
      console.log(error)
    }
  }

  //Todo 삭제
  const deleteTodo = async (list) => {
    const { id } = list

    try {
      await request.delete(`todos/${id}`, {headers:{Authorization: token}})
      request
        .get('todos', {headers:{Authorization: token}})
        .then(response => {
          setLists(response.data)
        })
        .catch(error => console.log(error))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    request.get('todos', {headers:{Authorization: token}})
           .then(response => {setLists(response.data)})
           .catch(error => console.log(error))
  }, [])

  return (
    <Wrap>
      <TodoInput setTodo={setTodo} createTodo={createTodo} />
      <TodoList
        lists={lists}
        updateDone={updateDone}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
      />
    </Wrap>
  )
}

const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;

`

export default TodoPage