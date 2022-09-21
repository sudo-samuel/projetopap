import { React, useState, useContext } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { AuthContext } from "../helpers/AuthContext";
import './pages.scss'
import '../components/components.scss'
function Login() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const { setAuthState } = useContext(AuthContext)
   
    let history = useHistory();


    const handleLogin = () => {
        const data = { email: email, password: password };
        axios.post("http://localhost:3001/users/login", data).then((response) => {
            if(!response.data.erro) {
                localStorage.setItem("tkn", response.data.token);
                setAuthState({
                    email: response.data.email,
                    id: response.data.id,
                    status: true,
                });
                history.push("/home")               
            }else {
                alert(response.data.erro); 
                history.push("/")
            }
        });
    }
    


    return (
    <div className="loaderApp">
        <h2 className="componentTitle">Login</h2>
        <form onSubmit={handleLogin} className="formlogreg">
                <div className="inputGroup">        
                    <label className="formLabel25">Email</label><br />
                    <input className="inputField50" type="text" placeholder="Email" onChange={(e) => {setEmail(e.target.value)}} required/>
                </div>

                <div className="inputGroup">
                    <label className="formLabel25">Password</label> <br />
                    <input className="inputField50" type="password" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}} required />
                </div>
                <div className="buttonGroup">
                    <button className="inputButton50" id="buttonEntrar" type="submit">Entrar</button>
                </div>
        </form>
    </div>
    
    )
}
export default Login;
