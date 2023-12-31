import { Route, Routes, useLocation } from 'react-router-dom';
// import ScrollToTop from 'react-router-scroll-top';
import './App.css';
// import aos
import Aos from 'aos';
import 'aos/dist/aos.css';

// import components
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import CarrerPage from './pages/CarrerPage/CarrerPage';
import ContactUsPage from './pages/ContactUsPage/ContactUsPage';
import LoginPage from './pages/LoginPage/LoginPage';
import SingleAddPage from './pages/SingleAddPage/SingleAddPage';
import SlidePage from './pages/SlidePage/SlidePage';
import ApplicationForm from './components/ApplicationForm/ApplicationForm';
import Header from './components/Navbar/Header';
import MainFooter from './components/Footer/MainFooter';
import { useEffect } from 'react';
import SignupPage from './pages/SignUpPage/SignUpPage';

function App() {
  const {pathname} = useLocation();
  // console.log(pathname)
  useEffect(() => {
    window.scrollTo(0,0);
  }, [pathname])
  

     //Aos init
  Aos.init({
    duration:1800,
    offset:100,
  })

  return (
    <div className="">
      <Header></Header>
      
      <Routes>
      {/* <ScrollToTop> */}
      <Route path='/' element={<HomePage/>}/>
      <Route path='/about' element={<AboutPage/>}/>
      <Route path='/carrer' element={<CarrerPage/>}/>
      <Route path='/contactus' element={<ContactUsPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/singleData/:id' element={<SingleAddPage/>}/>
      <Route path='/slide' element={<SlidePage/>}/>
      <Route path='/apply' element={<ApplicationForm/>}/>
      <Route path='/signup' element={<SignupPage/>}/>
      {/* </ScrollToTop> */}
      </Routes>
      
      <MainFooter></MainFooter>
    </div>
  );
}

export default App;
