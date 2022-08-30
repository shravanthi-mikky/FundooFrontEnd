import React from 'react'
import Dashboard from '../Pages/Dashboard/Dashboard'
import SignIn from '../Pages/SignIn/SignIn'
import SignUp from '../Pages/SignUpComp/SignUp'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

function RouterComponent() {
  return (
    <div>
        <Router>
            <Routes>
                <Route path='/' element={<SignIn/>}></Route>
                <Route path='/SignUp' element={<SignUp/>}></Route>
                <Route path='/DashBoard' element={<Dashboard/>}></Route>
            </Routes>
        </Router>
      
    </div>
  )
}

export default RouterComponent
