import React from 'react'
import DropList from './DropList'
import Error from './Error'
import { withFormik, ErrorMessage, Form, Field } from 'formik'
import * as Yup from 'yup'

const options = [
    {value: 'Art', label: 'Art'},
    {value: 'Science', label: 'Science'},
    {value: 'Technology', label: 'Technology'},
    {value: 'IT', label: 'IT'},
];

const formikWrapper = withFormik({
    mapPropsToValues: () => ({
        username: '',
        email: '',
        topics: []
    }),
    handleSubmit: (values, {setSubmitting}) => {
        const payload = {
            ...values,
            topics: values.topics.map(topic => topic.value)
        }
        setTimeout(() =>{
            alert(JSON.stringify(payload, null, 2))
            setSubmitting(false)
        }, 3500)
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().required('Please enter your username'),
        email: Yup.string().email('Please enter a valid email')
        .required('Please enter your email'),
        topics: Yup.array().min(3, 'Please select 3 items')
        .of(Yup.object().shape({
            value: Yup.string().required(),
            label: Yup.string().required()
        }))
    })
});

const SignUpForm = (props) => {

    const {
        values, 
        setFieldValue,
        setFieldTouched, 
        handleReset,
        isSubmitting,
        dirty
        } = props;

    return (
        <Form className="p-5 mr-6">
            <h1 className="title is-3 ml-6 mb-6 has-text-primary">Sign up Form</h1>
        <div className="mr-6">
            <div className="field is-grouped"> 
               <label className="label has-text-link mr-3">Username:</label> 
               <Field name="username" type="text" placeholder="Enter Username" className="control input" />
            </div>
            <ErrorMessage component={Error} name="email"/>
            <div className="field is-grouped"> 
               <label className="label  has-text-link mr-6">Email:</label> 
               <Field name="email" type="email" placeholder="Enter your Email" className="control input" />
            </div>
            <ErrorMessage component={Error} name="username"/>
            <div className="field is-grouped"> 
               <label className="label  has-text-link mr-6">Fav Topics:</label> 
               <DropList value={values.topics} onChange={setFieldValue} onBlur={setFieldTouched} options={options}/>
            </div>
            <ErrorMessage component={Error} name="topics"/>
            <div className="pr-1" style={{marginLeft:"200px"}}>
                <button className="button is-danger" onClick={handleReset}
                disabled={!dirty || isSubmitting}>Reset</button>
                <button className="button is-success" disabled={isSubmitting}
                style={{marginLeft:"100px"}}>Submit</button>
            </div>
        </div>
            
        </Form>
    )
}

const EnhancedForm  = formikWrapper(SignUpForm)
export default EnhancedForm