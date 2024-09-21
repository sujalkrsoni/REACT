import axios from "axios"
import { useState } from "react"

export function FormDemo()
{
    function SubmitClick(e){
        e.preventDefault();
        console.log(e);
        for(var item of e.target){
            if(item.name=="submit"){
               if(item.value == "Insert"){
                console.log("Insert");
                break;
               }else{
                console.log("Dlee");
                return ;
               }
                
            }
            
        }
    }
   
    return (
        <div className="container-fluid">
           <form onSubmit={SubmitClick}>
              <dl>
                <dt>User Name</dt>
                <dd><input type="text" name="UserName"/></dd>
              </dl>
              <button name="submit" value="Insert" type="submit">Insert</button>
              <button name="submit" value="Delete" type="submit">Delete</button>
           </form>
        </div>
    )
}
