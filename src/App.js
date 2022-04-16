import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import './assets/scss/global.scss';
// import {Home} from './pages/Home';
import {AppHeader} from './cmps/AppHeader';
import {RobotApp} from './pages/RobotApp';

function App() {
  return (
    <Router>
      <div className="app">
        <AppHeader />
        <main className="container">
          <Switch>
            <Route component={RobotApp} path="/" />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
