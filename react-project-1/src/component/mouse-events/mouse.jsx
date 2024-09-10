import { useEffect, useState } from "react"
import axios from "axios";
import "./mouse.css";


export function MouseEvents(){
    const [pics,setPic] = useState([{url : ' '}]);
    const [activeImg , setActImg] = useState(' ');


    useEffect(()=>{
        axios.get("image.json")
        .then((response)=> setPic(response.data));
    },[])


    function HandleHover(e){
        setActImg(e.target.src)

    }

    const [Moving, setMoving] = useState({position : '' , x : '' , y : ''})
    function HandleMove(e){
        setMoving({
            position : 'fixed',
            x : e.clientX + 'px',
            y : e.clientY + 'px',
        })
    }

    return (
        <div className="row" onMouseMove={HandleMove} style={{height: "1000px"}}>
            {/* <div className="col">
                {
                    pics.map((imgs) =>
                        <div className=" mb-2 " key={imgs.url} style={{width:'50%' , height:'20'}}>
                            <img src={imgs.url} onMouseOver={HandleHover} alt="" style={{width:'50%' , height:'20'}} />
                        </div>
                    )
                }
            </div>
            <div className="col">
                <img src={activeImg} width="500px" height="750px" alt="" />
            </div> */}
            <div  className="rounded text-dark rounded-circle" style={Moving} >ABCcgfh</div>
        </div>
    )
}