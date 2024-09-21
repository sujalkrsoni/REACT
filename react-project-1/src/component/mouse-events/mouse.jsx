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

    const [Moving, setMoving] = useState({position : ' ' , top : ' ' , left : ' '})
    function HandleMove(e){
        setMoving({
            position : 'fixed',
            left : e.clientX + 'px',
            top : e.clientY + 'px',
            border : '3px solid black',
            height : '20px',
            width : '20px',
            borderRadius : '50%',
            padding : '20px'
        })
    }
    return (
        <div className="row" style={{height: "1000px"}}> 
            
            {/* <div className="col">
                {
                    pics.map((imgs) =>
                        <div className=" mb-2 " key={imgs.url} style={{width:'50%' , height:'20'}}>
                            <img src={imgs.url} onMouseOver={HandleHover} alt="" style={{width:'50%' , height:'20'}} />
                        </div>
                    )
                }
            </div> */}


            {/* <div className="col">
                <img src={activeImg} width="500px" height="750px" alt="" />
            </div> */}


            {/* <div><img width="20px" height="20px" src="https://yt3.googleusercontent.com/8gjld8X7j7NvoaqTcN3lWuC2vowDimXq7xpb5lI6nmIC-eFuXZ_f8lhrwG3n33IPevNfIjNU0A=s900-c-k-c0x00ffffff-no-rj" style={Moving} alt="" /></div> */}

            <div style={Moving}>
                <div style={{backgroundColor : 'red', width : '15px' , height : '15px', borderRadius : '50%'}}></div>
            </div>
        

        </div>
    )
}