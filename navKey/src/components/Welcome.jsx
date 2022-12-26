import UserService from "../services/UserService";
import React from 'react';
import './styles/welcome.css';
import imageSmiley from './assets/logo/smileylogo.png';

const Welcome = () => (
  <div className="stilo1">
    
      <div class="image">
      <img src={imageSmiley} alt=""/>
      </div>
    
    <h1 class="title1">Welcome admin</h1>
    <p className="subtitle">Please authenticate yourself!</p>
    <p>
      <button className="btn btn-lg btn-warning" onClick={() => UserService.doLogin()}>Login to start</button>
    </p>
    
  </div>

  
  

);

export default Welcome
