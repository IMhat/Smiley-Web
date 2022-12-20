import UserService from "../services/UserService";
import React from 'react';
const RenderOnAuthenticated = ({ children }) => (UserService.isLoggedIn()) ? children : null;

export default RenderOnAuthenticated
