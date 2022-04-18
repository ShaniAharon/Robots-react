import {Redirect} from 'react-router-dom';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import './assets/scss/global.scss';
import {AppHeader} from './cmps/AppHeader';
import {About} from './pages/About';
import {RobotApp} from './pages/RobotApp';
import {RobotEdit} from './pages/RobotEdit';
import {RobotsDetails} from './pages/RobotsDetails';

function App() {
  const PrivateRoute = (props) => {
    const isAdmin = true;
    // return isAdmin ? <Route path={props.path} component={props.component} /> : <Redirect to='/'/>
    return isAdmin ? <Route {...props} /> : <Redirect to="/" />;
  };

  return (
    <Router>
      <div className="app">
        <AppHeader />
        <main className="container">
          <Switch>
            <Route path="/robot/edit/:id?" component={RobotEdit} />
            <Route path="/robot/:id" component={RobotsDetails} />
            <PrivateRoute path="/about" component={About} />
            <Route path="/" component={RobotApp} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
