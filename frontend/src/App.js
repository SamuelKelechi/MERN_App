import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Dashboard from './Components/Dashboard';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './Components/Header';
import Login from './Components/Login';
import Register from './Components/Register';
import './index.css'

function App() {
  return (
   <>
    <Router>
      <div className='Container'>
        <Header />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </Router>
    <ToastContainer />
   </>
  );
}

export default App;
