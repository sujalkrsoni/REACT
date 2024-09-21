import { createContext, useContext, useState } from "react"

let userContext = createContext(null)

export function LvlTwoComponent(){
    let user = useContext(userContext)
    return (
        <div className="bg-warning p-3">
            level 2 component  {user}
        </div>
    )
}


export function LvlOneComponent(){
    let user = useContext(userContext)
    return (
        <div className="bg-danger p-3">
            Level 1 component  {user}
            <LvlTwoComponent />
        </div>
    )
}

export function ContextDemo(){
    const [user,setUser] = useState('')
    function HandleNameChange(e){
        setUser(e.target.value)
    }
    return (
        <div className="container-fluid bg-dark p-4 text-white">
            <userContext.Provider value={user} >
                <input type="text" onChange={HandleNameChange} />
                <h2>Parent component {user}</h2>
                <LvlOneComponent />
            </userContext.Provider>
        </div>
    )
}