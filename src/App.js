import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import './assets/scss/global.scss';
import {AppHeader} from './cmps/AppHeader';
import {RobotApp} from './pages/RobotApp';
import {RobotEdit} from './pages/RobotEdit';
import {RobotsDetails} from './pages/RobotsDetails';

function App() {
  return (
    <Router>
      <div className="app">
        <AppHeader />
        <main className="container">
          <Switch>
            <Route path="/robot/edit/:id?" component={RobotEdit} />
            <Route path="/robot/:id" component={RobotsDetails} />
            <Route path="/" component={RobotApp} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
