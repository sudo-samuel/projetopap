import React from 'react'
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from '../helpers/AuthContext';
import {useParams, useHistory } from 'react-router-dom'




function Home() {

    let { id } = useParams();
    let [email, setEmail] = useState();
    let [ isOwner, setIsOwner ] = useState();
    const {authState} = useContext(AuthContext);

    useEffect(() => {
        /* axios.get(`http://localhost:3001/users/basicinfo/${id}`).then((response) => {
            setEmail(response.data.email);
        })
 */
        /* axios.get(``) */

        axios.get(``)
        


    })
    return (
        <>
            <div className="loaderApp">
                <h3 className="loaderTitle"> Home </h3>

                    <h3>Informações do seu projeto</h3>






            </div>



        </>
    )
}

export default Home;
