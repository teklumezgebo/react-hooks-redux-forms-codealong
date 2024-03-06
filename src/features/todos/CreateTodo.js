import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { todoAdded } from "./todosSlice"

function CreateTodo() {
  
  const dispatch = useDispatch()

  const [text, setText] = useState("")

  function handleChange(event) {
    setText(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    dispatch(todoAdded(text))
    setText("")
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>
          <label>add todo</label>
          <input type="text" onChange={handleChange} value={text}/>
        </p>
        <input type="submit"/>
      </form>
    </div>
  )
}

export default CreateTodo;
