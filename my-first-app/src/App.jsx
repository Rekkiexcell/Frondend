import Navbar from './Componen/Navbar.jsx';
import { Outlet } from 'react-router-dom';
import { userDataContext } from './Data/userDataContext.js';

import { useState } from 'react';

function App() {
  const[user, setUser] = useState(null)
  return (
        <userDataContext.Provider value={{user, setUser}}>
          <Navbar />
          <Outlet />
       </userDataContext.Provider>
  )
}

export default App
