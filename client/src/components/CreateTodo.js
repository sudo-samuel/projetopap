import React from 'react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

function CreateTodo() {

    const initialValues = {
        title: "",
        description: "",
    };

    const validationSchema = Yup.object().shape({
        title: Yup.string().required(" O nome da tarefa não pode ser vazio "),
        description: Yup.string().required(" A descrição da tarefa é importante "),
    })

    const onSubmit = (data) => {
    axios.post("http://localhost:3001/todos", data).then((response) => {
        console.log("Tarefa criada com sucesso")
      })
    }

    return (
        <div>
            <h4>Adicionar tarefa</h4>

            <Formik 
                initialValues={initialValues} 
                validationSchema={validationSchema} 
                onSubmit={onSubmit}
            >
                <Form className="createTodo">
                    <label className="label">Título</label><br/>
                    <Field className="input" id="inputCreateTodo" name="title" placeholder="Title" autoComplete="off"/> <br/>
                    <label className="label">Texto adicional</label><br/>
                    <Field className="input" id="inputCreateTodo" name="description" placeholder="texto adicional" autoComplete="off"/><br/>
                    <button type="submit" className="button"> Create todo </button>
                    
                    <br />
                    <br />

                    <div className="errLog">
                        <span className="errSpan"><ErrorMessage name="title" component="span" /> | </span><br/>
                        <span className="errSpan"><ErrorMessage name="description" component="span" />| </span> <br/>
                    
                    </div>
                    
                    
                </Form>

            </Formik>

        </div>
    )
}

export default CreateTodo;
