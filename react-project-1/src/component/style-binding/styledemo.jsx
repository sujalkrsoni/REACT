import { useState } from "react"


export function StyleDemo(){

    const [errStyle, setErrStyle] = useState({border: '',outline:''})

    function HandleNameChange(e){
        if(e.target.value == ''){
            setErrStyle({
                border : '2px solid red'
            })
        }else{
            setErrStyle({
                border : "2px solid blue"
            })
        }
    }

    function HandleNameFocus(){
        setErrStyle({
            border : 'none',
            outline : 'none'
        })
    }


    return (
        <div className="container-fluid"> <br />
            <h1>-- Style Binding --</h1>
            <h3>Register</h3>
            <dl>
                <dt>User Name</dt>
                <dd>
                <input type="text" style={errStyle} onFocus={HandleNameFocus} onChange={HandleNameChange} placeholder="Name Required" />
                </dd>
            </dl>

        </div>
    )
}