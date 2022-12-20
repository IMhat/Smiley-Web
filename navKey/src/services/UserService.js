import Keycloak from "keycloak-js";
import { BehaviorSubject } from "rxjs";
import React, { useEffect, useState } from "react";



export const jwt = new BehaviorSubject(null);
export const updateJwt = new BehaviorSubject(null);
export const username = new BehaviorSubject(null);




// var Config = JSON.parse(require('../keycloak.json'));

 const _kc = new Keycloak((require('../keycloak.json')));



/**
 * Initializes Keycloak instance and calls the provided callback function if successfully authenticated.
 *
 * @param onAuthenticatedCallback
 */
 const initKeycloak = (onAuthenticatedCallback) => {
  _kc.init({
    onLoad: 'check-sso',
    silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
    pkceMethod: 'S256',
  })
    .then((authenticated) => {
      if (!authenticated) {
        console.log("user is not authenticated..!");
      } else {
         
        sessionStorage.setItem('kctoken', _kc.token);
        // sessionStorage.setItem('username', _kc.tokenParsed?.preferred_username); 
        // username.next(_kc.token);
        // jwt.next(_kc.tokenParsed?.preferred_username);

       
      }  
      onAuthenticatedCallback();
    })
    .catch(console.error);
};



 const doLogin = _kc.login;

 const doLogout = _kc.logout;


 const getToken = () => _kc.token;


 const isLoggedIn = () => !!_kc.token;

//  export function useLoggedIn() {
//   const [loggedIn, setLoggedIn] = useState(!!jwt.value);
//   useEffect(() => {
//     setLoggedIn(!!jwt.value);
//     return jwt.subscribe((c) => {
//       setLoggedIn(!!jwt.value);
//     });
//   }, []);
//   return loggedIn;
// }



 const updateToken = (successCallback) =>
  _kc.updateToken(300)
    .then(successCallback)
    .catch(doLogin);

  const getUsername = () => _kc.tokenParsed?.preferred_username;


 const hasRole = (roles) => roles.some((role) => _kc.hasRealmRole(role));


 const UserService = {
  initKeycloak,
  doLogin,
  doLogout,
  isLoggedIn,
  getToken,
  updateToken,
  getUsername,
  hasRole,
};

// username.next(sessionStorage.getItem('username'));
const jwtToken = sessionStorage.getItem('kctoken');
jwt.next(jwtToken);

export default UserService;
