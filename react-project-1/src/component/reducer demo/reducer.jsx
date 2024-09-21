import { act, useReducer } from "react"

let initialState = {userCount : 0 }

function reducer(state,action){
    switch(action.type){
        case  "join" :
            return {userCount : state.userCount + 1};
        case "exit" :
            return {userCount : (state.userCount == 0)? state.userCount : state.userCount - 1};
    }
}

export function ReducerDemo(){
    const [ state, dispatch] = useReducer(reducer, initialState);

    function HandleJoin(){
        dispatch({type : 'join'});
    }
    function handleExit(){
        dispatch({type : 'exit'});
    }

    return (
        <div className="container-fluid d-flex justify-content-center">
            <div className="card m-4 p-2 w-25 ">
                <div className="card-header text-center">
                    <h2>React Js Live</h2>
                    <p>Live Users : {state.userCount} </p>
                </div>
                <div className="card-body text-center ">
                     <iframe src="http://www.youtube.com/embed/LGL4xk1nNJM" width="100%"></iframe>
                </div>
                <div className="card-footer text-center">
                    <button onClick={HandleJoin} className="btn btn-primary ms-2 ">Join</button>
                    <button onClick={handleExit} className="btn btn-danger ms-2">Exit</button>
                </div>
            </div>
        </div>
    )
}