import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios'
import './components.scss'

function ViewNotes() {
    
    const [listOfNotes, setListOfNotes] = useState([]);
   
        useEffect(() => {
          axios.get("http://localhost:3001/notes").then((response) => {
            if(response.data)  
              setListOfNotes(response.data);
          })  
        }, [])

    return (
        
            <>
                {listOfNotes.map((note, key) => {
                  return(
                        <div className="noteDiv">
                            <span className="noteSpan">{note.body}</span>
                            <span className="createdAt">{note.createdAt}</span>
                            <br />
                            <button className="inputButton25">Eliminar</button>
                            <button type="submit" className="inputButton25">Alterar</button>
                        </div>
                  );  
                  }) }
            </>
        
    )
}

export default ViewNotes
