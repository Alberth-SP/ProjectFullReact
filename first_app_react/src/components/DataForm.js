import React , {Component } from 'react';
import {connect} from 'react-redux';
import { addData } from '../redux/actions/item';
import {Formik, Form, Field, FieldProps} from 'formik';

class DataForm extends Component {

    render() {
        return (
            <>
            
            <Formik 
                initialValues={{
                    code: "",
                    name: "",
                    danger: false
                }}
                onSubmit={ (values, {resetForm}) => {               
                    this.props.addData(values);
                    resetForm();
                } } 
            >
                { ({values, handleSubmit, handleChange}) => (
                    
                    <Form className="formulario">
                        <h1> Form </h1>
                        <div className="for_input1">
                            <label htmlFor="code"> Code</label>
                            <Field 
                                type="text" 
                                placeholder="Code" 
                                name="code"

                            />
                        </div>
                        <div v className="for_input1">
                            <label htmlFor="name">Name</label>
                            <Field 
                                type="text"  
                                placeholder="Name"
                                name="name"
                        />
                        </div>
                        <div v className="for_input2" >
                            <label htmlFor='danger'>Danger</label>
                            <Field 
                                type="checkbox" 
                                name="danger"
                            />
                        </div>
                        <button type="submit"> Create</button>
                    </Form>

                )}
                
                
            </Formik>
            </>
            
        )
    }
}



function mapDispatchToProps(dispatch){
    return {
        addData: (val) => dispatch(addData(val))
    }
}

const wrapper = connect(null, mapDispatchToProps);
const cmpDataForm = wrapper(DataForm);
export default cmpDataForm;