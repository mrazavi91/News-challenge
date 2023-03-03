
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar.jsx';
import NewsDetails from './Components/NewsDetails';
import UseFetch from './Components/UseFetch';

function App() {
  //fetching data
  // const url = "http://localhost:5000/response";
  // const data = UseFetch(url);
  // // console.log(data)

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='content'>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/news/:id'>
              <NewsDetails />
            </Route>
          </Switch>
        </div>
        <br />
        <Footer />
      </div>
      </Router>
      
  );
}

export default App;
