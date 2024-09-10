import React from "react"; 
import "./login.css"

export function Login(){
    return (
        <React.Fragment>
            <main>
                <form className="form-control w-25 ">
                    <h3 className="text-center"><span className="bi bi-person-fill"></span>User Login</h3>
                    <dl>
                        <dt> User Name </dt>
                        <dd ><input className="form-control" type="text" /></dd>
                        <dt >Password</dt>
                        <dd ><input className="form-control" type="password" /></dd>
                        <button className="btn btn-primary w-100">Submit</button>
                    </dl>
                </form>
            </main>
        </React.Fragment>
    )
}

// let login = ()=>{
    
// }