import logo from './logo.svg';
import './App.css';
import SignIn from './Pages/SignIn/SignIn';
import SignUp from './Pages/SignUpComp/SignUp';
import TakeNote3 from './Components/TakeNote3/TakeNote3.jsx'
import TakeNote1 from './Components/TakeNote1/takeNote1.jsx'
import TakeNote2 from './Components/TakeNote2/takeNote2.jsx'
import Header from './Components/Header/header.jsx'
import Dashboard from './Pages/Dashboard/Dashboard';
import RouterComponent from './Router/Router';
import { Provider } from 'react-redux';
import store from './Redux/Store';


function App() {
  return (
    <div >

      {/* <SignIn/> */}

      <Provider store={store}>
        <RouterComponent />
      </Provider>
      {/* <RouterComponent /> */}
      {/* <SignUp/> */}
      {/* <Header/> */}
      {/* <TakeNote1/> */}
      {/* <TakeNote2/> */}
      {/* <TakeNote3/> */}

      {/* <Dashboard/> */}

    </div>
  );
}

export default App;
