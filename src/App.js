import './App.css';
import Header from './component/Header';
import Skills from './component/Skills';
import Projects from './component/Projects';
import Contact from './component/Contact';
import Navbar from './component/Navbar';
import About from './component/About';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Navbar />

        <Route exact path='/' render={(renderProps)=> (
          <div>
            <Header />
            <Skills />
            <Projects />
            <Contact />
          </div>
        )} />
        <Route path='/about' render={(renderProps)=> (
          <div>
            <About />
          </div>
        )} />
        
      
    </div>
  );
}

export default App;
