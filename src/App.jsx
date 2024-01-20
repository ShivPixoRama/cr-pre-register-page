// import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// import './App.css'
// import SignUp from './components/SignUp'

// function App() {

//   return (
//     <>
//       <div>
//         <SignUp></SignUp>
//         </div>
//     </>
//   )
// }

// export default App

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import './App.module.scss'
import './App.css'
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

export default function App() {
  return (
    <div className="app">
      <BrowserRouter  basename="/">
        <Routes>
          <Route path="/" element={<SignUp></SignUp>} />
          {/* <Route path="/SignUp" element={<SignUp />} /> */}
          {/* <Route path="/SignIn" element={<SignIn />} /> */}

        </Routes>
      </BrowserRouter>
    </div>
  );
}
