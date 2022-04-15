import './assets/scss/global.scss';
import {Home} from './pages/Home';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <section className="container">Robot Shop</section>
      </header>
      <main className="container">
        <h1>
          <Home />
        </h1>
      </main>
    </div>
  );
}

export default App;
