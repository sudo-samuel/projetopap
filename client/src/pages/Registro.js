import React from 'react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Container, Row, Col} from "react-bootstrap";
import * as Yup from 'yup';
import { Link, useHistory } from "react-router-dom";


function Registro() {
    const initialValues = {
        email: "",
        password: "",
        repassword: "",
        name: "",
        surname: "",
    };



    const validationSchema = Yup.object().shape({
        email: Yup.string().min(1, "Muito pequeno").max(130, "Muito grande").email('Email inválido').required("Email obrigatório"),
        password: Yup.string().min(1, ", Password muito pequena").max(100 ,", Password excede o limite").required("Password obrigatória"),
        repassword: Yup.string().oneOf([Yup.ref('password'), null ], ', Verifica a password e a respetiva confirmação').required("Confirmação obrigatória"),
        name: Yup.string().max(150, "Nome muito grande.").required(", Nome obrigatório"),
        surname: Yup.string().max(150, "Apelido muito grande").required(", Apelido obrigatório"),
    })

    let history = useHistory("");

    const onSubmit = (data) => {
        axios.post("http://localhost:3001/users", data).then((response) => {
            
            if(response.data.erro){
                alert(response.data.erro)
            }else{
                alert(response.data.sucess)
                history.push("/users/login")
            }
      });
    }



    return (
        <div>
            
            <h2 className="componentTitle">Registro </h2>
            <Formik className="formlogreg" initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                
                    <Form>
                        
                        <div className="inputGroup">
                            <label className="formLabel25">Email</label>  <br />            
                            <Field className="inputField50" type="email" name="email" placeholder="Insira aqui o seu email" autoComplete="off"/>
                        </div>       
                        <div className="inputGroup">
                            <label className="formLabel25">Password</label> <br />
                            <Field className="inputField50" type="password" name="password" placeholder="Insira aqui a sua password" autoComplete="off"/>
                        </div>
                        <div className="inputGroup">
                            <label className="formLabel25" >Confirmar chave</label> <br />
                            <Field className="inputField50" type="password" name="repassword" placeholder="Confirmar chave" autoComplete="off"/>
                        </div>
                        <div className="inputGroup">
                            <label className="formLabel25">Nome</label> <br />
                            <Field className="inputField50" name="name" placeholder="Nome" autoComplete="off"/>
                        </div>
                        <div className="inputGroup">
                            <label className="formLabel25">Sobrenome</label>  <br />             
                            <Field className="inputField50" name="surname" placeholder="Apelido" autoComplete="off"/>
                        </div>
                            
                        <div className="inputGroup">
                            <button className="inputButton50" type="submit">Criar conta</button>
                        </div>
                            
                            <div className="errLog">
                                <span className="errSpan"><ErrorMessage name="email" component="span"/>,</span><br/>
                                <span className="errSpan"><ErrorMessage name="password" component="span"/>,</span><br/>
                                <span className="errSpan"><ErrorMessage name="repassword" component="span"/>,</span><br/>
                                <span className="errSpan"><ErrorMessage name="name" component="span"/>,</span><br/>
                                <span className="errSpan"><ErrorMessage name="surname" component="span"/>,</span><br/>
                            </div>
                        
                    </Form>
            </Formik> 
        </div>
    )
}

export default Registro;
