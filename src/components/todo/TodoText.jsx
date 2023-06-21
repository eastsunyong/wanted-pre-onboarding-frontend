import React from "react"
import styled from "styled-components"

const TodoText = ({list,toggle,modify,setModify,updateDone}) => {

    return (
      <Wrap>
        <input
          type='checkbox'
          onChange={e => e.target.checked}
          checked={list.isCompleted}
          onClick={() => updateDone(list)}
        />
        {toggle ? 
          <span>{list.todo}</span>
         : 
          <input
            data-testid='modify-input'
            value={modify}
            onChange={e => {
              setModify(e.target.value)
            }}
          />
        }
      </Wrap>
    )
  }

  const Wrap = styled.label`
    display: flex;
    align-items: center;

    font-size: 2rem;
    font-weight: 600;
  `

export default TodoText