import { useState } from 'react';
import React from 'react';
const Todo = ({dispatch, currentState}) => {
    let [val, setVal] = useState(currentState.title);
    const changeVal= (e)=>{
        setVal(e.target.value);
    }
    return (
        <>
            <div className='todo'>
                <textarea className='todo-title' disabled = {currentState.text} value ={val} onChange={(e)=>changeVal(e)}/>
                <button className='todo-delete' onClick={()=>dispatch({title : currentState.id, type:'delete'})}>Delete</button>
                <button className='todo-Edit' onClick={()=>dispatch({title : currentState.id, type:'Edit', value:val})}>{currentState.text?"Edit":"Save"}</button>
            </div>
        </>
    )
}


export { Todo }

