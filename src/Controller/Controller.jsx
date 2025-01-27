import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from '../Homepage/Home'
import Adminpanel from '../Adminpanel/Adminpanel'
import Menu from '../Menu/Menu'
import Footer from '../Footer/Footer'
import Copyright from '../Copyright/Copyright'


const Controller = () => {
  return (
    <Router>
    
    <Home/>

    <Routes>

   <Route path='/aadmin' element={<Adminpanel/>}></Route>

    </Routes>

    <Menu/>
    <Footer/>
    <Copyright/>
    </Router>
  )
}

export default Controller;