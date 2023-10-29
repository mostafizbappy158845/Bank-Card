import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import CarrerPage from './pages/CarrerPage/CarrerPage';
import ContactUsPage from './pages/ContactUsPage/ContactUsPage';
import LoginPage from './pages/LoginPage/LoginPage';
import SingleAddPage from './pages/SingleAddPage/SingleAddPage';

function App() {
  return (
    <div className="">
      <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/carrer' element={<CarrerPage/>}/>
      <Route path='/contactus' element={<ContactUsPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/singleData/:id' element={<SingleAddPage/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
