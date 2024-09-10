import React, { useState } from "react"

export function ClassBinding(){
    
    const [theme,setTheme] = useState('w-25 ')
    const [btn,setBtn] = useState('w-100 btn btn-dark')
    function SubmitClick(){
        alert("Successfully Sent")
    }
    function DarkMode(e){
         if(e.target.checked){
            setTheme('w-25 bg-dark text-white')
            setBtn('btn btn-warning w-100')
         }else{
            setTheme('w-25 bg-light')
            setBtn('btn btn-dark w-100')
         }
    }
    return (
        <div className="container-fluid d-flex justify-content-center p-5">
            <form className={theme}>
                <h3 className="bi bi-person-fill text-center">User Login</h3>
                <span className="form-switch">
                <input type="checkbox" className="form-check-input" onChange={DarkMode} /> <span className="h6 ms-1">Dark Mode</span>
                </span>
                <dl>
                    <dt>UserName</dt>
                    <dd><input type="text" className="form-control" /></dd>
                    <dt>Password</dt>
                    <dd><input type="password" className="form-control" /></dd>
                    <button onClick={SubmitClick}  className={btn}>Submit</button>
                </dl>
            </form>
        </div>
    )
}