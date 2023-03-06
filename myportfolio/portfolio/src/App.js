import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Project from './Component/Project/Project';
import Contact from './Component/Contact/Contact';
import Skill from './Component/Skills/Skill';
import Static from './Component/Statics/Statics';
import Contribution from './Component/Contrubution/Contrubution';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Home/>
     <About/>
     <Skill/>
     <Project/>
     <Static/>
     <Contribution/>
     <Contact/>
    </div>
  );
}

export default App;
