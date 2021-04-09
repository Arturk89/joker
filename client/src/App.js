import './App.scss';
import Main from './Components/Dashboard/Main';
import Auth from './Components/LoginRegister/Auth';
import {BrowserRouter as Router,
  Redirect,
        Route,
      Switch} from 'react-router-dom';

function App() {
  const isLogin = false;

  return (
    <div className="App">
      <Router>
        {!isLogin && <Redirect to="/login" />}
        <Switch>
          {
            !isLogin ? (
              <Route path="/login">
                  <Auth />
              </Route>
            ) : (
            <Route path="/">
            <Main />
            </Route>
            )
          }
          
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
