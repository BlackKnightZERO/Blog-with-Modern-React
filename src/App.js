import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
import './Navbar';
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import Login from './Login';
import ProtectedRoutes from './ProtectedRoutes';
// import auth from './auth'

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <Login />
            </Route>

            <ProtectedRoutes path="/home" exact component={Home} />
            <ProtectedRoutes path="/create" exact component={Create} />
            <ProtectedRoutes path="/blogs/:id" exact component={BlogDetails} />
            
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
