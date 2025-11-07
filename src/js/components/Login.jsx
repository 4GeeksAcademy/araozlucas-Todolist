import React, { useState } from "react";

export const Login = () => {
    
    const handleEmail = (event) => {setEmail(event.target.value)};
    const handlePassword = (event) => {setPassword(event.target.value)};
    const handleIAgree = (event) => {setIAgree(event.target.checked)};

    const handleSubmit = (event) => {
        event.preventDefault ();
        const dataToSend = {email, password, iAgree};
        /*
        const dataToSend = {
            email: email,
            password: password,
            agree: iAgree,
        }
        */
        console.log(dataToSend);
    }

    const handleReset = () => {
        setEmail('');
        setPassword('');
        setIAgree(false);
    }


    return (
        <div className="container text-start">
            <h1 className="text-center mt-10">Login</h1>
            <div className="col-10 col-sm-8 col-md-6 col-lg-4 m-auto">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        value={handleEmail} onChange={handleEmail} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"
                        value={handlePassword} onChange={handlePassword} />
                    </div>
                    <div className="mb-3 form-check">
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"
                        value={handleIAgree} onChange={handleIAgree} />
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary me-2">Submit</button>
                        <button onClick={handleReset} type="reset" className="btn btn-secondary">Reset</button>
                    </div>
                </form>
            </div>
        </div>
    );
};
