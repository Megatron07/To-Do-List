import React from "react"
import { useState } from 'react';

const AddTodo = ({ dispatch }) => {
    const [inputState, setInput] = useState("");

    const handleChange=(e)=>{
        setInput(e.target.value);
    }

    return (
        <>
            <form id="todo-form" onSubmit={(e)=>{e.preventDefault()
                                     dispatch({value:inputState, type:'add'})}}>

                <label htmlFor="todo-input">Title :</label>
                <input type="text" id="todo-input" value={inputState} onChange={handleChange} required/>
                <button type="submit" id="addButton">ADD</button>
            </form>
        </>
    )
}

export { AddTodo }