import React, { useState } from "react";

function ToDoForm({ onAddToDo }) {
    const [text, setText] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        if(text.trim() !== "") {
            onAddToDo(text);
            setText(""); //clears the input field
        }
    }

    return (
        <form onSubmit={handleSubmit} >
            <input
                type="text"
                value={text}
                onChange={ (e) => setText(e.target.value) }
                placeholder="Add a new to-do..."
                style={ {padding: "8px", width: "200px", marginRight: "8px" }}
            />
            <button type="submit" style={ { padding:"8px" }} >
                Add
            </button>
        </form>
    )
}

export default  ToDoForm;