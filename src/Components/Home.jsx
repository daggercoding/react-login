import React from 'react'

const Home = (props) => {
  return (
    <div>
        <div className='header'>
        <h1>REACT-DEMO-APP</h1>
        <a href='home'><h1>Home</h1></a>
        <a href='about'><h1>About</h1></a>
        <button onClick={props.form}>Logout</button>
        
       
    </div>
      
    </div>
  )
}

export default Home
