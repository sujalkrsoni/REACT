import { type } from '@testing-library/user-event/dist/type'
import react from 'react'
import {useState , useEffect } from 'react'
import { useForm } from "react-hook-form"
 
export function HookDemo(){
    const {register , handleSubmit, formState : {errors}} = useForm() 
    
    const submit = (values) =>{
        alert(JSON.stringify(values));
    }
    

    return (
        <div className='container-fluid'>
            <form onSubmit={handleSubmit()}>
                <dl>
                    <dt>Name</dt>
                    <dd><input type="text" name="Name" {...register("Name",{required :true,minLength :4})} /></dd>
                        <dd>
                            {(errors.Name?.type == 'required')?<span>Name Required</span>:<span></span>  && (errors.Name?.type == "minLength")?<span>min length must be 4</span> : <span></span>}
                        </dd>
                    <button>Submit</button>
                </dl>
            </form>
        </div>
    )
}