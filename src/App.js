import './App.css';
import Main from './components/Main';
import About from './components/About';
import BackgroundVideo from './components/BackgroundVideo';

function App() {
  return (
    <div className="App">
      <BackgroundVideo />
      <Main />
      <About />
    </div>
  );
}

export default App;
