import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from '../Homepage/Home'

import Menu from '../Menu/Menu'
import Footer from '../Footer/Footer'
import Copyright from '../Copyright/Copyright'
import Panel from '../Panel/Panel'


const Controller = () => {
  return (
    <Router>
    
    <Home/>

    <Routes>

   <Route path='/panel' element={<Panel/>}></Route>

    </Routes>

    <Menu/>
    <Footer/>
    <Copyright/>
    </Router>
  )
}

export default Controller;