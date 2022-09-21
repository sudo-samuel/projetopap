import React from 'react'
import CreateNotes from '../components/CreateNotes';
import ViewNotes from '../components/ViewNotes';


function Notas() {

    
    return (
        <>

            <div className="loaderApp">
                <h3 className="loaderTitle">Notas</h3>
                <div className="containerFloat">
                    <div className="childFloatLeft">
                        <h4 className="componentTitle">As suas notas</h4>
                        {/* <ViewNotes /> */}
                    
                    </div>
                    <div className="childFloatRight">
                        <h4 className="componentTitle">Adicionar notas</h4>
                        <CreateNotes />
                    </div>


                </div>




            </div>

        </>
    )
}

export default Notas
