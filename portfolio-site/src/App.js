import './App.css';
import { Heading } from './components/Heading';
import { Selectionbox } from './components/selectionbox';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Portfolio } from './components/Portfolio';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Skills } from './components/Skills';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Heading/>
      <Routes>
        <Route path="/" element={<Selectionbox/>}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/skills" element={<Skills />}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
