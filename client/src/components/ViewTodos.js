import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

import './components.scss';


function ViewTodos() {


    const [listOfTodos, setListOfTodos] = useState([]);
    const [date, setDate] = useState([]);
    
    
    useEffect(() => {
      axios.get("http://localhost:3001/todos").then((response) => {
        setListOfTodos(response.data);
      })  
    }, [])

    
    


    return (
        <>
            
            {listOfTodos.map((todo, key) => {
                return ( 
                <div className="todo-content">
                     
                            <div className="todo">
                                
                                <div className="todo-title">
                                    <span className="span-title">{todo.title} </span>  
                                    <span className="span-user">@USER</span>
                                </div>
                                
                            </div>
                            
                        
                        
                            <div className="todo-footer">
                                    <span className="todo-date">{todo.date}</span><br />
                                    
                            </div>
                    
                     
                            <div key={key} className="todo-body">
                                    <span className="descSpan">{todo.description}</span> <br />
                            </div>
                        
                            <div className="todo-action">
                                
                                <button className="button-task">Concluir</button>
                                <button className="button-del">Eliminar</button>

                            </div>   
                        

                </div>
                
                );  
            })}



           
        </>
    )
}

export default ViewTodos;