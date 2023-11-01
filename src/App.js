import './App.css';
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom';
import Login from "./Pages/Login"
import Home from "./Pages/Home"
import AdminDashboard from './Pages/AdminDashboard';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/admindashboard' element={<AdminDashboard/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App;
