import './App.css';
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom';
import Login from "./Pages/Login"
import Home from "./Pages/Home"
import AdminDashboard from './Pages/AdminDashboard';
import AddStudent from './Pages/AddStudent'
import StudentDetails from './Pages/StudentDetails'
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/admindashboard' element={<AdminDashboard/>}/>
        <Route path='/addstudents' element={<AddStudent/>}/>
        <Route path='/studentdetails' element={<StudentDetails/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App;
