import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogPost from './pages/BlogPost';
import Header from './pages/Header';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import ListPage from './pages/ListPage';

function App() {
  return (
    <Router>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog/:id" element={<BlogPost />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blogs/:filter" element={<ListPage/>} />

    </Routes>
  </Router>
  
  );
}

export default App;
