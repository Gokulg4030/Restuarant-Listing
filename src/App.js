
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Restaurentlist from './components/Restaurentlist';
import Viewrest from './components/Viewrest';
import {BrowserRouter as Router, Route,Routes}  from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <header className="App-header">
       
      <Header/>
      
      </header>
      <Routes>
        <Route path='/' element={<Restaurentlist/>}/>
        <Route path='/Viewrest/:id' element={<Viewrest/>}/>
      </Routes>
      
      
      <Footer/>
    </div>
  );
}

export default App;
