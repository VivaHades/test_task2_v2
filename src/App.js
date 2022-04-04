import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.scss'
import Results from './components/Results/Results'
import Header from './components/Header/Header'
import HomePage from './components/HomePage/HomePage'
import ContactUs from './components/ContactUs/ContactUs'
import About from './components/About/About'
function App() {
  return (
    <BrowserRouter className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/result" element={<Results />}/>
        <Route path="/contacts" element={<ContactUs />}/>
        <Route path="/about" element={<About />}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
