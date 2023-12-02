// src/redux/reducer.js
const initialState = {
    isAuthenticated: false,
    jwt: null,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          isAuthenticated: true,
          jwt: action.payload.jwt,
        };
      case 'LOGOUT':
        return {
          ...state,
          isAuthenticated: false,
          jwt: null,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  