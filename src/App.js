import './assets/scss/global.scss';
// import {Home} from './pages/Home';
import {RobotApp} from './pages/RobotApp';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <section className="container">Robot Shop</section>
      </header>
      <main className="container">
        <h1>
          <RobotApp />
        </h1>
      </main>
    </div>
  );
}

export default App;
