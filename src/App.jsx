import Adminpanel from "../Adminpanel/Adminpanel";
import Copyright from "./Copyright/Copyright";
import Footer from "./Footer/Footer";
import Home from "./Homepage/Home";
import Menu from "./Menu/Menu";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const App = () => {
  return (
    <>

<Router>
<Home/>
 <Routes>

 <Route path='/admin' element={<Adminpanel/>}></Route>
 </Routes>
    <Menu/>
    <Footer/>
    <Copyright/>
    

</Router>

    
    </>
  )
}

export default App;