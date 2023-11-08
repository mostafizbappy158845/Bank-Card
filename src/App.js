import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import CarrerPage from './pages/CarrerPage/CarrerPage';
import ContactUsPage from './pages/ContactUsPage/ContactUsPage';
import LoginPage from './pages/LoginPage/LoginPage';
import SingleAddPage from './pages/SingleAddPage/SingleAddPage';
import SlidePage from './pages/SlidePage/SlidePage';
import ApplicationForm from './components/ApplicationForm/ApplicationForm';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import Header from './components/Navbar/Header';
import MainFooter from './components/Footer/MainFooter';

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/carrer' element={<CarrerPage/>}/>
      <Route path='/contactus' element={<ContactUsPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/singleData/:id' element={<SingleAddPage/>}/>
      <Route path='/slide' element={<SlidePage/>}/>
      <Route path='/apply' element={<ApplicationForm/>}/>
      <Route path='/signup' element={<SignUpPage/>}/>
      </Routes>
      <MainFooter></MainFooter>
    </div>
  );
}

export default App;
