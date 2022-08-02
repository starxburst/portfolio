import './App.css';
import Main from './components/Main';
import About from './components/About';
import BackgroundVideo from './components/BackgroundVideo';
import Skill from './components/Skill';
import Project from './components/Project';

function App() {
  return (
    <div className="App">
      <BackgroundVideo />
      <Main />
      <About />
      <Skill />
      <Project />
    </div>
  );
}

export default App;
