import { useDispatch } from "react-redux"
import { useState } from "react"

function LogIn() {

    const users = useSelector((state) => state.user.users) 
    const dispatch = useDispatch()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={username} onChange={(e) => setUserName(e.target.value)} placeholder="username" />
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" />
                <button type="submit">ADD USER</button>
            </form>
        </div>
    )
}


export default LogIn