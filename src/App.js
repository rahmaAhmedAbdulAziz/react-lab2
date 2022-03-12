// import React from 'react'
// import { BrowserRouter,Route } from 'react-router-dom'
// import { useState } from 'react' 
// import Nav from './Nav'
// import Form from './Form'
// import Add from './Add'


// function App() {
//   const [form,setForm]= useState("rahma")

//   return (

// <BrowserRouter>
// <div>
// <Nav/>
// <Form rahma={form} />
// <Add/>
// <Route path='/' component={Form}/>
// <Route path='/add' component={Add}/>
//     </div>
// </BrowserRouter>

//   )
// }

// export default App


import './App.css';
 import Nav from './Nav'
import Form from './Form'
import Add from './Add'
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Nav/>

        <Routes>

          <Route exact path="/" element={<Form />} />
          <Route path="/add" element={<Add />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;


