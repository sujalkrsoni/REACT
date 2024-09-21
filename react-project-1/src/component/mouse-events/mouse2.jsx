import react from "react"
import { useState , useEffect} from "react"

export function DisplayContainer (){

    const [dis, setDis] = useState({display : 'none'})
    function Show(){
        setDis(preview=>({
            display : preview.display == "none"? "block" : "none",
            width : '500px',
            height : '500px',
            backgroundColor : 'red'

        }));
        console.log("clicked ");
    }
    return (
        <div>
            <button onClick={Show} >Click Me</button>
            <div style={dis} width="200px" height="200px">
                asdf
            </div>
        </div>
    )
}