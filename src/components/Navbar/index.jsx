import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './navbar.css';

function Navbar() {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsAuthenticated(!!token); // Met à jour l'état en fonction de la présence du token
    }, []);

    const logout = () => {
        // Supprime le token d'authentification du localStorage //
        localStorage.clear();
        setIsAuthenticated(false);
        // Redirige l'utilisateur vers la page de connexion //
        navigate('/log');
    };
    
    return(
        <div className = "container-navbar">
            <div className= "box-icons">
            {!isAuthenticated && (
                    <Link className="loginbutton" to="/log">
                        <i className="fa-solid fa-power-off login"></i>
                    </Link>
                )}
                {isAuthenticated && (
                    <i className="fa-solid fa-power-off logout" onClick={logout}></i>
                )}
            </div>
            <nav className="nav-header">
                <Link className="nav_item1" to="/">
                    <p className="nav_item_text1">Home</p>
                </Link>
                <Link className="nav_item2" to="/about">
                    <p className="nav_item_text2">About</p>
                </Link>
                <Link className="nav_item3" to="/cv">
                    <p className="nav_item_text3">Cv</p>
                </Link>
            </nav>
        </div>
    )
}
export default Navbar;