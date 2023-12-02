// src/redux/actions.js
export const login = (jwt) => ({
    type: 'LOGIN',
    payload: { jwt },
  });
  
  export const logout = () => ({
    type: 'LOGOUT',
  });
  