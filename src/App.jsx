import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Services} from "./pages/Services";
import {Contact} from "./pages/Contact";
import {Register} from "./pages/Register";
import {Login} from "./pages/Login";
import {Navbar} from "./components/Navbar";
import { Logout } from "./pages/logout";
import { Error } from "./pages/Error";
import { View } from "./pages/View";



const App=()=> {

  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path ="/" element= {<Home />} />
      <Route path ="/about" element= {<About/>} />
      <Route path ="/services" element= {<Services/>} />
      <Route path ="/contact" element= {<Contact/>} />
      <Route path ="/register" element= {<Register/>} />
      <Route path ="/login" element= {<Login/>} />
      <Route path ="/logout " element= {<Logout/>} />
      <Route path ="/view " element= {<View/>} />
      <Route path ="*" element= {<Error/>} />


    



     </Routes>
     </BrowserRouter> 
    </>
  )
}

export default App
