import {useFormik , Form,Formik, ErrorMessage, Field} from "formik"
import * as yup from "yup"
import react from "react"
import { useState } from "react"
import { fn } from "jquery"


export function FormikForm(){


    return (
        <div>
            <Formik  initialValues={{name : '', price : '', contact : ''}} validationSchema={yup.object({name:yup.string().required().min(4,"too short"),price : yup.number().required().min(100,"min 100").max(100000, "max can be 100000"),contact : yup.string().required().matches(/\+91\s\d{10}/, "invalid number +91 7982347869")})} onSubmit={(values) => alert(JSON.stringify(values))}>
                {
                    form => 
                        <Form className="w-25 m-4 p-3">
                            <dl>
                                <dt>Name</dt>
                                <dd>
                                    <Field type="text" name="name" />
                                </dd>
                                <dd className="text-danger">
                                    <ErrorMessage name="name" />
                                </dd>
                                <dt>Price</dt>
                                <dd>
                                    <Field type="text" name="price" />
                                </dd>
                                <dd className="text-danger">
                                    <ErrorMessage name="price" />
                                </dd>
                                <dt>contact</dt>
                                <dd>
                                    <Field type="text" name="contact" />
                                </dd>
                                <dd className="text-danger">
                                    <ErrorMessage name="contact" />
                                </dd>
                            </dl>
                            <button disabled={(form.isValid)?false : true} className="btn btn-warning w-100">Submit </button>
                            <button className={(form.dirty)?"d-block btn btn-dark m-1 w-100" : "d-none" }>Save</button>
                        </Form>
                }
            </Formik>
        </div>
    )
}