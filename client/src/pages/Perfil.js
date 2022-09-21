import React, { useEffect, useState, useContext } from 'react'
import axios from "axios";
import { AuthContext } from '../helpers/AuthContext';
import {useParams, useHistory } from 'react-router-dom';

function Perfil() {

    let { id } = useParams();
    let history = useHistory();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState();
    const [isOwner, setIsOwner] = useState();

    /* useEffect(() => {
        axios.get(`http://localhost:3001/users/basicinfo/${id}`).then((response) => {
            setEmail(response.data.email);
            setName(response.data.name);
            setSurname(response.data.surname);
            setIsOwner(response.data.isOwner);     
        })

    }, []); */



    return (
        <>

            <h1> ./PERFIL </h1>
            <div>
                {/* <h2>Os seus dado</h2>
                <span>{email}</span>
                <span>{name + surname}</span>         
                <span>{isOwner}</span> */}
            </div>


        </>
    )
}

export default Perfil
