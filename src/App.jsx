import React, { createContext, useState } from "react";
import Router from "shared/Router";

export const AuthContext = createContext({
  isLog: false,
  setIsLog: () => {},
})

const App = () => {
  const access_token = localStorage.getItem('access_token')
  const [isLog, setIsLog] = useState(!!access_token)
  
  return (
    <AuthContext.Provider value={{ isLog, setIsLog }}>
      <Router />
    </AuthContext.Provider>
  )
}

export default App;
