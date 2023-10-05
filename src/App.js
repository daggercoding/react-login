import './App.css';
import Login from './Components/Login';
import Home from './Components/Home';
import { useState, useEffect } from 'react';
import Header from './Components/Header';

function App() {
  let [active, setActive] = useState(false);

  useEffect(() => {
   if (localStorage.loggedIn === "1") {
      setActive(true);
    }
  }, []);

  function displayForm() {
    setActive(false);
    localStorage.removeItem("loggedIn");
  }

  function displayHome(e) {
    e.preventDefault();
    setActive(true);
    localStorage.setItem("loggedIn", "1");
  }
  
  return (
    <div className='container'>
      {active && (
        <>
          <Home form={displayForm} />
          <div className='message'>LOGGED IN SUCCESSFULLY</div>
        </>
      )}

      {!active && (
        <>
          <Header />
          <Login Home={displayHome} />
        </>
      )}
    </div>
  );
}

export default App;
