import { useEffect } from "react";
import { useState } from "react"
import $ from "jquery";
import axios from "axios";

export function ApiBinding(){

    const [products, setProduct] = useState([{Name : '',price : 0}]);

    function LoadData(){

        // Through the XML 

        // var http = new XMLHttpRequest();
        // http.open("get","products.json",true)
        // http.send()
        // http.onreadystatechange = function(){
        //     if(http.readyState == 4){
        //         setProduct(JSON.parse(http.responseText))
        //     }
        // }


        // THROUGH THE FETCH METHOD 
        // fetch('products.json')
        // .then((res)=>{
        //     return res.json()
        // })
        // .then((data)=>{
        //     setProduct(data)
        // })
        // .catch((e)=>{
        //     console.log(e);
        // })
        


        // THROUGH THE JQUERY  
        // import $ from "jquery"
        //  $.ajax({
        //     method : "get",
        //     url : "products.json",
        //     success : (data)=>{
        //         setProduct(data)
        //     },
        //     error : ()=>{
        //         document.write(" some Error occuring ")
        //     }
        //  })

        // THorught the 3rd party . ( AXIOS )
        // npm i axios --save 
        axios.get("products.json")
        .then((res)=>{
            setProduct(res.data)
        })
        .catch((err)=>{
            console.log(err);
        })



    }

    useEffect(()=>{
        LoadData();
    },[])

    return (
        <div className="container-fluid">
            <h2>Products Table</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                   { products.map(item => 
                    <tr>
                         <td>{item.Name}</td>   
                         <td>{item.price}</td>
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    )
}