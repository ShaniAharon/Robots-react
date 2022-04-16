import {NavLink, withRouter} from 'react-router-dom';

import React from 'react';

function _AppHeader(props) {
  return (
    <header className="app-header">
      <section className="container">
        <h1 className="logo">Robot Shop</h1>
        <section className="back-container">
          <button onClick={props.history.goBack}>Back</button>
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
