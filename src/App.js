import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/header';
import {Home, Menu, Story, Reservation} from './components/pages';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/app.scss';


function App() {
  return (
    <Router>
    <div className="App">
     <Header/>
    <Switch>
     <Route path="/home" component={Home} exact/>
     <Route path="/reservation" component={Reservation}/>
     <Route path="/menu" component={Menu}/>
    <Route path="/story" component={Story}/>
    </Switch>
     <Footer/>
     
    </div>
    </Router>
    
  );
}

export default App;
