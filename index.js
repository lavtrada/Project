import React from 'react'
import ReactDOM from 'react-dom/client';
import Printers from './components/Printers';
import Printer from './components/Printer';
import PrinterDetails from './components/PrinterDetails';
import Home from './components/Home';
import Layout from './Layout';
import About from './components/About';
import {BrowserRouter,Routes,Route} from "react-router-dom";
const root=ReactDOM.createRoot(document.getElementById("root"));    
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>

            <Route index element={<Home />}></Route>
            <Route path="/Printers" element={<Printers />}></Route>
            <Route path="/Printer" element={<Printer />}></Route>
            <Route path="/PrinterDetails:id" element={<PrinterDetails />}></Route>
            <Route path="/Home" element={<Home/>}></Route>
            <Route path="/printer/add/:id" element={<printer/>}></Route>
            <Route path="/About" element={<About/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
)


//--------------------------------------------------------------------------------------------
// import React from "react";
// import  ReactDOM  from "react-dom/client";
// import Faculties from './components/Faculties';

// const root=ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <>
//     <Faculties />
//     </>
// )
//---------------------------------------------------------------------------------------------
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import  { useEffect, useState } from 'react';
// //import { BrowserRouter,Link,Route,Routes, useNavigate } from 'react-router-dom';
// const root = ReactDOM.createRoot(document.getElementById('root'));



// function Faculty() {
//   // const  navigate=useNavigate(); 
//   const[Faculty,setFaculty]=useState([]);
//     useEffect(()=>{
//         fetch("https://630c646983986f74a7bf24a5.mockapi.io/cars")
//         .then((res)=>{return res.json()}) 
//         .then((res)=>{setFaculty(res)})
//     },[])
//     const Formated=Faculty.map((Fac)=>{
//       return(
//           <>
//         <h1>
//           {Fac.name}
//           </h1>
//           <h2>
//           <img src={Fac.model}></img>
//             </h2>    
//           </>
//         )
//     })
//   return (
//     Formated
//   )
// }

// root.render(
//   <>
//   <Faculty />

//   </>

// );



//----------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------
// import React from 'react';
// import {BrowserRouter , Route ,Routes} from "react-router-dom";
// import ReactDOM from 'react-dom/client';
// import Layout from './Layout'
// import Home from './components/Home';
// import Faculties from  './components/Faculties';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <BrowserRouter>
//         <Routes>
//             <Route path ='/' element={<Layout/>}>
//                 <Route index element={<Home/>}></Route>
//                 <Route path="/Faculties" element={<Faculties/>}></Route>
//             </Route> 
//         </Routes>
//     </BrowserRouter>
//     )
//-----------------------------------------------------------------------------------------------------------------------------------------
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter , Route , Routes } from 'react-router-dom';
// import './index.css';

// import Layout1 from './Layout1';
// import Home from './Home';
// import About from './About1';
// import Faculty from './Faculty';
// // import Contact from './Contact';
// // import Addmission from './Addmission';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <BrowserRouter>
//         <Routes>
//             <Route path='/' element={<Layout1 />}>
//                 <Route index element={<Home />}></Route>
//                 <Route path = "about" element={<About />}></Route>
//                 <Route path = "contact" element={<Contact />}></Route>
//                 {/* <Route path = "addmission" element={<Addmission />}></Route> */}
//                 <Route path = "faculty" element={<Faculty />}></Route>
//             </Route>
//         </Routes>
//     </BrowserRouter>
// );
//-----------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------