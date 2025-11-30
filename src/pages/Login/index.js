import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
    const [user, setUser] = useState('frank');
    const navigate = useNavigate();
    function handleSelect(e) {
        const userName = e.target.value;
        setUser(userName);
        console.log('now ' + userName);
    }
    return (
        <div>
            <p>Login</p>
            <div className='select-user-dropdown'>
                <select onChange={e => handleSelect(e)}>
                    <option value='frank'>frank</option>
                    <option value='tom'>tom</option>
                    <option value='jane'>jane</option>
                </select>
            </div>
            <button onClick={() => {
                navigate(`/article?user=${user}`)
                console.log('传参user为' + user);
            }}>login in</button>
        </div>
    );
}