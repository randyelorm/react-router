import Home from "./Components/HOME/Home";
import About from "./Components/ABOUT/About"
import Contact from "./Components/CONTACT/Contact";
import Services from "./Components/SERVICES/Services";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

function App() {
  return (
 
    <Router>
        
              <Switch>
                    <Route exact path = "/">
                      <Home/>
                    </Route>

                    <Route path = "/about">
                      <About/>
                    </Route>

                  <Route path = "/contact">  
                        <Contact/> 
                  </Route>  

                <Route path = "/services">
                    <Services/>
                </Route>
            </Switch>
       
    </Router>

  );
}

export default App;
