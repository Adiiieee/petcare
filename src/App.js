import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import Homepage from './Components/Homepage/Homepage';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import VetUpload from './Components/VetUpload/VetUpload';
import VetLogin from './Components/VetLogin/VetLogin';
import VetDashboard from './Components/VetDashboard/VetDashboard';
function App() {
  const user = localStorage.getItem("email") != null ? localStorage.getItem("email") : "";
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/dashboard" element={<><Navbar user = {user}/><Homepage/></>}/>
        <Route path='/signup' element={<><Navbar/><Signup/></>}/>
        <Route path='/login' element={<><Navbar/><Login/></>}/>
        <Route path= "/" element={<><Navbar/><Home/></>}/>
        <Route path="/vet/upload" element={<><Navbar/><VetUpload/></>}/>
        <Route path="/vet/login" element={<><Navbar/><VetLogin/></>}/>
        <Route path="/vet/dashboard" element={<><Navbar user={user}/><VetDashboard/></>}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
