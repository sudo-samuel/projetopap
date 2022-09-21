import React from 'react'

function Index() {
    return (
        <div className="IndexLayout">
            <div className="indexLeft">
            <div className="logoWrapper">
                    <h1 className="indexh1"><span className="logoPro">Pro</span><span className="logoGest">Gest</span></h1>
                </div>
                
                <hr className="indexhr" />


                {/* <h2 className="indexh2">
                        Gestão de Projetos
                    </h2> */}
                    
                    <p className="indexparag">Cria o teu projeto, constrói a tua equipa com diferentes funções e atribui tarefas para cada uma delas. </p>
                   
                
            </div>
            <div className="indexRight"> 
                <hr className="indexhr" />
                <h2 className="indexh2">
                    Gestão de Projetos
                </h2>
            </div>
        </div>
    )
}

export default Index
