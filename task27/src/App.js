import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header/Header.js'
import  Home  from './Home/Home.js';
import  Contacts  from './Contacts/Contacts.js';
import  About  from './About/About.js';
import  NotFound  from './NotFound/NotFound.js';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
      <Route path="/"  element={<Home/>} />
       <Route path="/contacts" element={<Contacts/>} />
      <Route path="/about" element={<About/>} />
     <Route path="*" element={<NotFound />} />
     </Routes>
     </BrowserRouter>
  );
}

export default App;
