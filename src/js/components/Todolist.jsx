import React, { useState } from "react";

export const Todolist = () => {
    
    const handleEmail = (event) => {setEmail(event.target.value)};

    return (
        <div className="container text-start">
            <h1 className="text-center mt-10 quicksand-light text-danger">todos</h1>
            <div className="col-10 col-sm-8 col-md-6 col-lg-4 m-auto">
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputTask" className="form-label"></label>
                        <input type="text" className="form-control" id="exampleTask" aria-describedby="emailHelp" placeholder="New task"/>
                    </div>
                </form>
            </div>
        </div>
    );
};