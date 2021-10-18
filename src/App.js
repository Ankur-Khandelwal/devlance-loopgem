import "./App.css";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import LandingPage from "./pages/LandingPage";
import FormPage from "./pages/FormPage";

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/form" component={FormPage}/>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
