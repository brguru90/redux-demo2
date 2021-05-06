import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, HashRouter } from "react-router-dom"
import Home from "./components/home/page.jsx"
import Page2 from "./components/page2/page.jsx"

function App() {
  return (
    <div className="App">
      <Router>
        <Route>
          <HashRouter>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/page2" component={Page2} />
            </Switch>
          </HashRouter>
        </Route>
      </Router>
    </div>
  );
}

export default App;
