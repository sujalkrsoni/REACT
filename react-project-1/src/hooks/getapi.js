import { useState, useEffect } from "react"

export function UseApi(url){

    const [data,setData] = useState()
    useEffect(()=>{
        fetch(url)
        .then((res) => res.json())
        .then(content => setData(content))
    },[url])

    return data;
}