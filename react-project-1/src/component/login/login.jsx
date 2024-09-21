import React from "react"; 
import "./login.css"
import {useCaptcha } from '../../hooks/captcha'
import { UseApi } from "../../hooks/getapi";
import { useState ,useEffect } from "react";

export function Login(){
    const code = useCaptcha();
    const categories = UseApi('https://fakestoreapi.com/products/categories');
    let datagg = [1,2,3]
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
                        <dt>Verify Code</dt>
                        <dd>{code}</dd>
                        <dt>Select Data</dt>
                        <dd>
                            {/* <select>
                                {
                                    categories.map(category => 
                                        <option key={category}>{category}</option>
                                    )
                                }
                            </select> */}
                        </dd>
                        <button className="btn btn-primary w-100">Submit</button>
                    </dl>
                </form>
            </main>
        </React.Fragment>
    )
}

// let login = ()=>{
    
// }