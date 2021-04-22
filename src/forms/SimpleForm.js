import React from 'react';
import { Formik, ErrorMessage } from 'formik';

const SimpleForm = () => {
    return (
        <Formik
        initialValues={{name: ''}}
        onSubmit = { (values, {setSubmitting}) => {
            setTimeout(() => {
               alert(values.name)
                setSubmitting(false)
            }, 3000)
        } }
        validate ={ values => {
           let errors = {}
            if (!values.name){
                errors.name = 'Please write your name'
            }
            return errors
        }}
        render = {({ handleSubmit, handleChange, handleBlur, values, errors, touched, isSubmitting }) => (
            <form onSubmit={handleSubmit}>
                        <input onChange={handleChange} value={values.name} onBlur={handleBlur}
                        type="text" name="name" placeholder="Enter your name" className="input"/>
                        <button className="button is-link mt-2" disabled={isSubmitting} type="submit">Submit</button>
                        <div className="has-text-danger">
                            <ErrorMessage name="name"/>
                        </div>
                       
                    </form>
        )}
        />
           
    )
}

export default SimpleForm