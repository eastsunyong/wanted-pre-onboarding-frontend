import styled from "styled-components"

const TodoInput = ({ setTodo, createTodo }) => {
  return (
    <div>
      <Container onSubmit={createTodo}>
        <input
          data-testid='new-todo-input'
          onChange={e => setTodo(e.target.value)}
        />
        <button data-testid='new-todo-add-button'>추가</button>
      </Container>
    </div>
  )
}

const Container = styled.form`
  margin-bottom: 3rem;

  input {
    width: 50rem;
    height: 4rem;
    padding-left: 1rem;
    outline: none;
  }

  button {
    width: 8rem;
    height: 4rem;
    color: white;
    background-color: #4ec5f4;
    border: none;
  }
`

export default TodoInput