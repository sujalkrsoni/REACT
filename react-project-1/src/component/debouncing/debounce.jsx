import { useState } from "react"
import { useRef } from "react"


export function Debounce(){

    const [msg , setMsg ] = useState('')
    const flag = useRef(null)

    function db(){
        setMsg('hello 1st ')
    }
    function db1(){
        setMsg('hello 2nd')
    }
    function db2(){
        setMsg('hello 3rd')
    }

    function btnClick(){
        setTimeout(db,1000)
        flag.current =setTimeout(db1,3000)
        setTimeout(db2,5000)
    }
    function pauseclick(){
        clearTimeout(flag.current)
    }

    return (
        <div className="m-5">
            <h2>Debouncing ...</h2>
            <button onClick={btnClick} className="bi text-white p-3 m-1 btn btn-dark bi-play "></button>
            <button onClick={pauseclick} className="bi text-white p-3 m-1 btn btn-dark bi-pause"></button>
            <h6>{msg}</h6>
        </div>
    )
}