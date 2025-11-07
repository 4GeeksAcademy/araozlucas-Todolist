import React from "react";
import { useState } from "react";

export const Todolist = () => {
    
    const toDos = []; 

    const [task, setTask] = useState ('');
    const handleTask = (event) => {setTask(event.target.value)};
    const handleSubmit = (event) => {
    // Tienes que agregar la tarea al arra de Todos    
        event.preventDefault()
        toDos.push(task)
        console.log(toDos);
        
    };

    return (
        <div className="container text-start">
            <h1 className="text-center mt-10 quicksand-light text-danger">todos</h1>
            <div className="col-10 col-sm-8 col-md-6 col-lg-4 m-auto">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputTask" className="form-label"></label>
                        <input type="text" className="form-control" id="exampleTask" aria-describedby="emailHelp" placeholder="New task" 
                        value={task} onChange={handleTask}/>
                    </div>
                </form>
            </div>
        </div>
    );
};