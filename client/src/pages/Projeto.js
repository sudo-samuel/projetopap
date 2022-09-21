import {BrowserRouter as Router, Route, Switch, Link  } from "react-router-dom";

/* PAGES */


/* COMPONENTS */

import Equipas from './Equipas';
import Roles from './Roles';
import Tarefas from './Tarefas';
import Pessoas from './Pessoas';
import CreateProject from '../components/createProject'

import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from '../helpers/AuthContext';
import {useParams, useHistory } from 'react-router-dom';


function Projeto() {
    let { id } = useParams();
    let history = useHistory();
    const [email, setEmail] = useState();
    const [ isOwner, setIsOwner ] = useState();
    const [project, setProject] = useState([]);
    


    useEffect(() => {
        axios.get(`http://localhost:3001/projects/ProjectById/${id}`).then((response) => {
            
        
        })
    
    }, [])


   

    return (
        <>

        
            <div className="loaderApps">
                
                <nav className="sidebar">
            <ul className="sidebarUl">
                    <li className="sidebarLi">
                        <Link className="sidebarA" to="/equipas" style={{ textDecoration: 'none'}}> Equipa </Link>    
                    </li>

                    <li className="sidebarLi">
                        <Link className="sidebarA" to="/tarefas" style={{ textDecoration: 'none'}}> Tarefas </Link>
                    </li>

                    <li className="sidebarLi">
                        <Link className="sidebarA" to="/roles" style={{ textDecoration: 'none'}}> Roles </Link>
                    </li>

                    <li className="sidebarLi">
                        <Link className="sidebarA"  to="/pessoas" style={{ textDecoration: 'none'}}> Pessoas </Link>
                    </li>
           </ul>
            </nav>
            </div>
        

        <div className="loaderApps">
            <div className="IndexLayout">
                <div className="indexLeft">
                <h1 className="componentTitle">Comece por criar um projeto</h1>
                    
                </div>
                <div className="indexRight"> 
                    <hr className="indexhr" />
                    <CreateProject />
                </div>
                
            </div>
        </div>
            
            

          
                
               
            
           

        </>
    )
}

export default Projeto
