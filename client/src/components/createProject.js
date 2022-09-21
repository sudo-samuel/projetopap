import React from 'react'
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import '../pages/pages.scss'

import { useContext, useEffect, useState } from "react";
import { AuthContext } from '../helpers/AuthContext';
import {useParams, useHistory } from 'react-router-dom'


function CreateProject() {
    const {authState} = useContext(AuthContext);
    let history = useHistory();
    
    const initialValues = {
        codProj: "",
        name: "",
        description: "",
        owner: "",
    };

    useEffect(() => {
        if (!localStorage.getItem("tkn")) {
            history.push("/login");
        }
      }, []);
    
    const validationSchema = Yup.object().shape({
        codProj: Yup.string(),
        name: Yup.string().required("Nome do projecto obrigatório"),
        description: Yup.string().required("A descrição do projecto é importante"),
        owner: Yup.string(), 
    })


    
    const onSubmit = (data) => {
        axios.post("http://localhost:3001/projeto", data,
            { headers: {tkn: localStorage.getItem("tkn")}}).then((response) => {
                history.push("/projeto")
        });
    }


    return (
        <div>
            <Formik 
                initialValues={initialValues} 
                validationSchema={validationSchema} 
                onSubmit={onSubmit}
            >
                <Form className="createProject">
                    <label className="formlabel25">Nome do projeto</label><br/>
                    <Field name="name" placeholder="Nome do Projecto" className="inputField50" autoComplete="off"/> <br/>
                    <ErrorMessage name="name" component="span" className="errormessage" /><br/>

                    <label className="formlabel25">Description:</label><br/>
                    <Field className="inputField50" id="inputCreateTodo" name="description" placeholder="Description" autoComplete="off"/><br/>
                    <ErrorMessage name="description" component="span" className="errormessage" /> <br/>
                    
                    <button type="submit" className="inputButton50">Criar Projeto</button>
                </Form>

            </Formik>


        </div>
    )
}

export default CreateProject;


