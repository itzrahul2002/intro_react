import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './components/dashboard/Dashboard';
import About from './components/about/About';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';
import Pagenotfound from './components/pagenotfound/Pagenotfound';
import Services from './services/Services';
import Men from './components/men/Men';
import Women from './components/women/Women';
import Contactlist from './components/contactlist/Contactlist';
import Livecontactlist from './components/livecontactlist/Livecontactlist';

function App() {
  
  return (
   <BrowserRouter>
      <Header/>
      <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="about-us" element={<About />} />
      <Route path="contact-us" element={<Contact />} />
      <Route path="*" element={<Pagenotfound />} />
      <Route path="services" element={<Services/>}/>
      <Route path="men" element={<Men/>}/>
      <Route path="women" element={<Women/>}/>
      <Route path="Conact-list" element={<Contactlist/>}/>
      <Route path="live-conact-list" element={<Livecontactlist/>}/>
      </Routes>
      <Footer/>
   </BrowserRouter>
  );
}

export default App;
