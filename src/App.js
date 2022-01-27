 import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Moviedetails from './Components/MovieDetails/Moviedetails';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path='/'>
        <Home></Home>
        </Route>
        <Route path='/movie/:imdbID'>
          <Moviedetails></Moviedetails>
        </Route>
        <Route path='/*'>
        <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
