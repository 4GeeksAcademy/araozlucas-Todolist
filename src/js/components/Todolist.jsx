import React from "react";
import { useState } from "react";

export const Todolist = () => {
    
    const [task, setTask] = useState ('');
    const [toDos,setToDos] = useState([]);
    
    const handleTask = (event) => {setTask(event.target.value)};
    const handleSubmit = (event) => {
    // Tienes que agregar la tarea al array de toDos    
        event.preventDefault()
        if (task.trim() === '') return;
        setToDos([...toDos, task]);
        setTask('');
        console.log(toDos);
    };

    return (
        <div className="container text-start">
            <h1 className="text-center mt-10 quicksand-light text-danger display-1">todos</h1>
            <div className="col-10 col-sm-8 col-md-6 col-lg-4 m-auto">
                <form onSubmit={handleSubmit}>
                    <div className="container">
                        <ul className="list-group">
                            <li className="list-group-item">
                                <label htmlFor="exampleInputTask" className="form-label"></label>
                                <input type="text" className="form-control" id="exampleTask" aria-describedby="emailHelp" placeholder="New task" 
                                value={task} onChange={handleTask}/>
                            </li>
                            {toDos.map((toDo, index) => (
                                <li key={index} className="hidden-icon list-group-item d-flex justify-content-between">
                                    {toDo}
                                    <span>
                                        <i className="fa-solid fa-trash text-danger"/>
                                    </span>
                                </li>
                               
                            ))}
                            <li className="list-group-item text-secondary">
                              <small><i> {toDos.length} item left</i></small>
                            </li>
                        </ul>
                    </div>
                </form>
            </div>
        </div>
    );
};