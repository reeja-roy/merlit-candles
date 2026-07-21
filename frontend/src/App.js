
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './pages/Home';
import Trending from './pages/Trending';
import Collections from './pages/Collections';
import ContactUs from './pages/ContactUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/trending' element={<Trending/>} />
        <Route path='/collections' element={<Collections/>} />
        <Route path='/contactus' element={<ContactUs/>} />
           <Route path='/privacy' element={<PrivacyPolicy/>} />
           <Route path='/home' element={<Home/>} />

      </Routes>
      
    </div>
  );
}

export default App;
