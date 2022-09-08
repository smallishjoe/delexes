import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Slider from "./components/home/Slider"
import Content from './components/home/Content';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Slider/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
