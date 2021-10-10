import React from 'react';
import './App.scss';
import './media.scss';
import Header from './components/header'
import Main from './components/main'
import Footer from './components/footer'
import { BrowserRouter, Route} from "react-router-dom";



function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Header/>
              <Route path="/" component={Main}/>
              <Footer/>
          </div>
      </BrowserRouter>
  );
}

export default App;
