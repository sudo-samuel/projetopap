import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import axios from 'axios';

import { useContext, useEffect, useState } from "react";
import { AuthContext } from '../helpers/AuthContext';
import {useParams, useHistory } from 'react-router-dom';




function CreateNotes() {

    let { id } = useParams();
    let history = useHistory();
    const [note, setNote] = useState("");
 
    
    const handleOnClick = () => {
        alert(note)
        axios.post("http://localhost:3001/notes/criarNota", note).then( (response) => {
            if(response.data.sucess){
                alert(response.data.sucess + response.data.note)
            }else {
                alert(response.data.e)
            }
        })
    } 


    return (
        <div>
            <input className="inputField50" placeholder="Anotação..."  onChange={(e) => {
          setNote(e.target.value);
        }} />
            <button className="inputButton25" onClick={handleOnClick}> Adicionar </button>
        </div>
    )
}

export default CreateNotes
