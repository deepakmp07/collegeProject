// import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
// import Button1 from './pages/page1';
// import Button2 from './pages/page2';
// import DemoSta from './components/clickme';
// import Container from "./components/hoc";
// import MovieList from './components/movielist';
// import AddMovie from './components/addmovie';
// import { MovieProvider } from './components/moviecontext';
// import Nav from './components/nav';
import DynamicForm from './components/create.js';
import gridGame from "./components/gridgame";
function App() {
  return (
    <div className="App">
      {/* <div>
        <ul >
          <li>Home</li>
          </ul>
      </div>
      <header className="App-header">
        <p>Deepak</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <NewComponent/> */}
     {/* <Routes>
          <Route path="/" element={<Button1/>} />
          <Route path="/page2" element={<Button2/>} />
     </Routes > */}
     {/* <Container/>
     <MovieProvider>
     <Nav/>
     <AddMovie/>
     <MovieList/> 
     </MovieProvider> */}
     <gridGame/>
    </div>
  );
}

export default App;
