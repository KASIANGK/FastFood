import { useDispatch } from "react-redux";
import { useState } from "react";
import { loginUser } from "../../userSlice";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { useSelector } from "react-redux";

function LogIn() {

    const dispatch = useDispatch()
    const [username, setUsername] = useState('username')
    const [password, setPassword] = useState('password')
    const [isLogged, setIsLogged] = useState(false)
    // const loggedInUser = useSelector(state => state.user.loggedInUser)

    function handleSubmit(e) {
        // empecher rechargement de la page qd le formulaire est submit (qd connexion erronee)
        e.preventDefault()

        if (username === 'username' && password === 'password') {
            dispatch(loginUser({ username, password }))
            setUsername('')
            setPassword('')
            setIsLogged(true)
        } else {
            alert('Ooops, try again')
        }
    }

    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            {isLogged ? (
                <div>
                    <h2>WELCOOOOME!</h2>
                    <Link to='/'><button>Return to Home</button></Link>
                </div>
            ) : (
                <div>
                    <h2>LOG IN</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label className="username">username :</label>
                            <input 
                            type="text" 
                            id="username" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div>
                            <label className="password">password :</label>
                            <input 
                            type="password" 
                            id="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button 
                        className="logIn-btn" 
                        type="submit">Log In</button>
                    </form>
                </div>
            )}
        </div>
    )
}

export default LogIn
