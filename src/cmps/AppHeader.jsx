import {withRouter} from 'react-router-dom';
import {NavLink} from 'react-router-dom';

function _AppHeader(props) {
  const onBack = () => {
    console.log('props:', props);
    props.history.goBack();
  };

  return (
    <header className="app-header">
      <section className="container">
        <h3 className="logo">Robot Shop</h3>
        <section className="back">
          <button onClick={onBack}>Back</button>
        </section>
        <nav>
          <NavLink activeClassName="my-active" exact to="/">
            Home
          </NavLink>
          <NavLink activeClassName="my-active" to="/about">
            About
          </NavLink>
        </nav>
      </section>
    </header>
  );
}

export const AppHeader = withRouter(_AppHeader);
