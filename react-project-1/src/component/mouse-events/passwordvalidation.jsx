import react from "react" 
import { useState , useEffect} from "react"


export function LoginValidation(){

    const [ msg, setMsg] = useState('')
    const [meter, setMeter] = useState(1)
    function HandleFocus(e){
        setMsg("Password must be 4 to 15 character and 1 upper case")

    }
    function HandleBlur(){
        setMsg(" ")
    }

    function HandleKeyUp(e){
        if(e.target.value.match(/(?=.*[A-Z]\w){4,15}/)){
            setMsg("Strong Password")
            setMeter(4)
        }else {
            if(e.target.value.length<4){
                setMsg("Weak Password")
                setMeter(2)
            }
        }
    }
    return (
        <div>
            <h1>Login (validation )</h1>
            <input onFocus={HandleFocus} onKeyUp={HandleKeyUp} onBlur={HandleBlur} type="password" /><br />
            <meter value={meter} min="1" max="4" style={{width : "190px"}}></meter>
            <p>{msg}</p>
        </div>
    )
}