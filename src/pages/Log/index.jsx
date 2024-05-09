import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from "../../components/Navbar";
import "./log.css";

function Log() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Requête API pour vérifier les informations de connexion //
            const response = await fetch('endpoint-d-authentification', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                // Si l'authentification réussit, redirige vers la page d'administration //
                navigate('/formsadmin');
                const loginIcons = document.querySelector('.container-login-icons');
                loginIcons.style.display="none";
                const logoutIcons =document.querySelector('.container-logout-icons');
                logoutIcons.style.display="flex";
            } else {
                // Si l'authentification échoue, affiche un message d'erreur //
                const data = await response.json();
                setError(data.message);
            }
        } catch (error) {
            console.error('Erreur lors de l\'authentification :', error);
            setError('Une erreur s\'est produite lors de la tentative de connexion');
        }
    };

    return(
        <main className="log-main">
            <Navbar />
            <h3 className="title-form-login">Login</h3>
            <form className="form-log" onSubmit={handleSubmit}>
                <label htmlFor="email" className="label-login-form">Email:</label>
                <input type="email" id="email" autoComplete="off" className="email" value={email || ''} onChange={(e) => setEmail(e.target.value)}/>
                <label htmlFor="password" className="label-login-form">Password:</label>
                <input type="password" id="password" autoComplete="off" className="password" value={password || ''} onChange={(e) => setPassword(e.target.value)}/>
                {error &&<p className="errormsg">{error}</p>}
                <input type="submit" id="submit-login" className="submit-login" name="Login" value="Login"/>
            </form>
        </main>
    )
}
export default Log;