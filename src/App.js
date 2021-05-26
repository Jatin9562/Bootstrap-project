
import './App.css';
import Header from './components/Header'
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import Pricing from './components/Pricing';




function App() {
  return (
    <>
      <Router>
        <Header/>
        <Switch>
          <Route exact path='/home' component={Home}/>
          <Route exact path='/pricing' component={Pricing}/>
          

          

        


        </Switch>
      </Router>
    </>
  );
}

export default App;
