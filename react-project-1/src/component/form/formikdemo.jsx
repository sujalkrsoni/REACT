import {useFormik} from "formik"
import react from "react"
import {useState , useEffect } from "react"
// import {required,max,min} from "yup"
import *  as yup from "yup";

export function Formik(){

    // function validateproduct(formdata){
    //     let error = {name : '',price : '',stock : '',city : ''};

    //     // validating name 
    //     if(formdata.name.length == 0){
    //         error.name = "Name Required !"
    //     }else{
    //         if(formdata.name.length < 3){
    //             error.name = "Too short !"
    //         }else{
    //             error.name = " "
    //         }
    //     }

    //     // validating price 
    //     if(formdata.price == 0){
    //         error.price = "Price Required !"
    //     }else{
    //         if(isNaN(formdata.price)){
    //             error.price = "Must be number "
    //         }else{
    //             error.price = ""
    //         }
    //     }

    //     // city 
    //     if(formdata.city == "-1"){
    //         error.city = "Please select city"
    //     }else{
    //         error.city = ""
    //     }

    //     return error;
    // }

    const formik = useFormik({
        initialValues : {
            name : '',
            price : 0,
            stock : false,
            city : ''
        },
        // validate : validateproduct,
        validationSchema : yup.object({
            name : yup.string().required().min(4,"too short"),
            price : yup.number().required("price required").min(1000,"price min be 1000").max(1000000,"price max be 1000000n")

        }),
        onSubmit : (values)=>{
            alert(JSON.stringify(values));
            console.log(JSON.stringify(values));
        }
    })
    console.log(formik);
    return (
        <div className="form-control w-25 m-5">
            <form onSubmit={formik.handleSubmit}>
                <h2>Register Product</h2>
                <dl>
                    <dt>Name</dt>
                    <dd>
                        <input className="form-control" {...formik.getFieldProps("name")} type="text" name="name" />          
                    </dd>
                    <dd className="text-danger">{formik.errors.name}</dd>
                    <dt>Price</dt>
                    <dd>
                        <input className="form-control" onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" name="price" />
                    </dd>
                    <dd className="text-danger">{formik.errors.price}</dd>
                    <dt>Stock</dt>
                    <dd>
                        <input  type="checkbox" onBlur={formik.handleBlur} onChange={formik.handleChange} name="stock" />
                    </dd>
                    <dt>Shipped to </dt>
                    <dd>
                        <select  className="form-select" onBlur={formik.handleBlur} onChange={formik.handleChange}  name="city" id="">
                            <option value="-1">Select City</option>
                            <option value="delhi">delhi</option>
                            <option value="punjab">punjab</option>
                        </select>
                    </dd>
                    <dd className="text-danger">{formik.errors.city}</dd>
                    <button className="btn btn-warning w-100">Submit</button>
                </dl>
            </form>
        </div>
    )
}