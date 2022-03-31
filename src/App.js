import './App.css';
import Signup from './pages/Signup/index';
import Home from './pages/home/index'
import Posts from './pages/Posts/index';
import { Routes, Route } from "react-router-dom";

export default function App() {
  return(
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/signin' element={<Signup />} />
      <Route path='/post' element={<Posts />} />
    </Routes>
  );
}