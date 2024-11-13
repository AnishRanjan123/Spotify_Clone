import React from 'react';
import './Login.css';
import { loginUrl } from './spotify';
function Login() {
  return (
    <div className = "login">
    
    <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgIFLxGsu8vqjFh8_Z0h3_bLK2MRT3kDHMUA&s" alt = ""/>
      {/* Spotify logo */}
    {/* Login with spotify button */ }
    <a href={loginUrl}>
        LOGIN WITH SPOTIFY
    </a>
    </div>
  )
}

export default Login
