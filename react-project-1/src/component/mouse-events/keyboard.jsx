import react from "react"
import { useState , useEffect } from "react"
import axios from "axios"

export function KeyboardEvent(){
    const [msg , setMsg] = useState('')
    const [isAva, setAva] = useState(false)
    function handleUserName(e){
        axios.get("username.json")
        .then((res)=>{
            for(let user of res.data){
                if(user.name === e.target.value){
                    setMsg('Try another ')
                    setAva(false)
                    break;
                }else {
                    setMsg(' Available ')
                    setAva(true)
                }
            }
        })
    }

    return (

        <div> 
            <h5>Login </h5>
            <input onKeyUp={handleUserName} type="text" placeholder="Enter UserName" />
            <p className={(isAva)?"text-success" : "text-danger"} style={{color : "red"}}>{msg}</p>
        </div>
    )
}
