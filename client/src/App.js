import './App.css';
import { Route, Switch, Link, BrowserRouter, useHistory } from "react-router-dom";
import { useEffect, useState } from "react"


//pages ~

import Login from './pages/Login';
import Register from './pages/Registro';
import Logout from './pages/Projeto';

import Convites from './pages/Convites'; 
import Home from './pages/Home';
import Notas from './pages/Notas';
import Perfil from './pages/Perfil';
import Projeto from './pages/Projeto';


import { AuthContext } from './helpers/AuthContext';
import axios from 'axios';
import Index from './pages/Index';


import Equipas from './pages/Equipas';
import Roles from './pages/Roles';
import Tarefas from './pages/Tarefas';
import Pessoas from './pages/Pessoas';


import './components/components.scss'


function App() {
  
  const [authState, setAuthState] = useState(
    {
      email: "",
      id: 0,
      status: false
    }
  );

  let history = useHistory();
  
  useEffect(() => {
    axios.get("http://localhost:3001/users/auth", {
      headers: {
        tkn: localStorage.getItem("tkn"),
      },
    }).then((response) => {
        if (response.data.erro) {
          setAuthState({...authState, status: false});
        } else {
          setAuthState({
            email: response.data.email,
            id: response.data.id,
            status: true,
          });
          console.log("Utilizador entrou com sucesso" +  authState.email)
        }
      });
    }, []);
  
  const handleLogout = (req, res) => {
    localStorage.removeItem("tkn");
    setAuthState({email: "", id: 0, status: false })
    history.push("/login")
  };

  return (
    <>
      <AuthContext.Provider value={{authState, setAuthState}}>
      {console.log(authState.status)}
      {!authState.status   
      ? ( 
        <div className="navbarlogincontainer">
          <nav className="navbarlogin">
            <ul className="navbarloginUl">
                <li className="navbarloginLi">
                  <Link  to="/login" style={{ textDecoration: 'none'}} className="navbarloginA"> Login </Link>
                </li>     
              <li className="navbarloginLi" className="navbaloginLi">
                  <Link to="/register" style={{ textDecoration: 'none'}} className="navbarloginA"> Register </Link>                
              </li>
            </ul> 
          </nav>
        </div>
        ) : (
          
            <div className="loggedInContainer">
              <nav className="navbarmenu">
                <ul className="navbarmenuUl">
                    <li className="navbarmenuLi">
                        <Link to="/home" className="navbarmenuA" style={{ textDecoration: 'none'}}> Home </Link>
                    </li>

                    <li className="navbarmenuLi">
                        <Link to="/projeto" className="navbarmenuA" style={{ textDecoration: 'none'}}> Projeto </Link>
                    </li>

                    <li className="navbarmenuLi">
                        <Link to="/notas" className="navbarmenuA" style={{ textDecoration: 'none'}}> Notas </Link>
                    </li>

                    <li className="navbarmenuLi">
                        <Link to="/convites" className="navbarmenuA" style={{ textDecoration: 'none'}}> Convites </Link>
                    </li>
                    <li className="navbarmenuLi">
                        <Link to="/perfil" className="navbarmenuA" style={{ textDecoration: 'none'}}> Perfil </Link>
                    </li>

                    <li className="navbarmenuLiLogOut">
                        <Link to="/logout" className="navbarmenuAlogout"  style={{ textDecoration: 'none'}} onClick={handleLogout}> Logout</Link>
                    </li>
                    
                </ul>  
            </nav>
            </div>
          
        )}
        
        


        
        
          <Switch>                
          {/* O UTLIMO COMPONENTE É O DEFAULT */}
            
            
            <Route path="/register" exact component={Register} />
            <Route path="/login"  exact component={Login} />
           
            <Route path="/equipas" exact component={Equipas} />
            <Route path="/tarefas"  exact Component={Tarefas} />
            <Route path="/roles"  exact component={Roles} />                
            <Route path="/pessoas" exact component={Pessoas} />
            
            <Route path='/home' exact component={Home} />  
            <Route path='/perfil' exact component={Perfil} />    
            <Route path='/projeto' exact component={Projeto} />               
            <Route path='/convites' exact component={Convites} /> 
            <Route path='/notas' exact component={Notas} />  
            <Route path='/logout' exact component={Logout}/> 
            <Route path='/' component={Index} />

          </Switch>
        </AuthContext.Provider>
            
    </>
  );
}

export default App;
