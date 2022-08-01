import './App.css';
import Main from './components/Main';
import About from './components/About';
import BackgroundVideo from './components/BackgroundVideo';
import Project from './components/Project';

function App() {
  return (
    <div className="App">
      <BackgroundVideo />
      <Main />
      <About />
      <Project />
    </div>
  );
}

export default App;
