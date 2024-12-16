import React from "react";

function ToDoList({ toDos }) {
    return(
        <ul style={{ listStyleType: "none", padding:0}} >
            {toDos.map((toDo, index) => (
                <li 
                    key={index}
                    style={ {
                        padding: "10px",
                        margin: "5px 0",
                        border: "1px solid #ccc", 
                        borderRadius: "5px",
                        backgroundColor: "#f9f9f9",
                    }}
                >
                    {toDo}
                </li>
            ))}
        </ul>
    )
}
export default ToDoList;