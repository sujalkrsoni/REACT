import react from "react"
import { useState , useEffect } from "react"

export function CopyPaste(){
    const [msg, setMsg] = useState('');
    const [pstMsg , setPstMsg] = useState(' ')
    function HandleCopy(){
        setMsg("coppied")
    }
    function HandlePaste(){
        setPstMsg("You can't paste here !")
        document.onpaste = ()=>{
            return false;
        }
    }
    return (
        <div>
            <h2>Copy & Paste </h2>
            <dl>
                <dt>Enter A/c No</dt>
                <dd><input type="text" onCopy={HandleCopy} /></dd>
                <dd>{msg}</dd>
                <dt>RE-enter</dt>
                <dd><input type="text" onPaste={HandlePaste}/></dd>
                <dd>{pstMsg}</dd>
            </dl>
        </div>
    )
}