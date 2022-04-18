import React from 'react';
import {Route} from 'react-router-dom';
import {NavLink} from 'react-router-dom';

export function About() {
  const Team = () => {
    return (
      <ul>
        <li>team1</li>
        <li>team2</li>
        <li>team3</li>
      </ul>
    );
  };

  const Vision = () => {
    return (
      <ol>
        <li>Good robots for your projects</li>
        <li>robots for your dream</li>
      </ol>
    );
  };

  return (
    <section className="about">
      <section className="title">
        <h2>About us and robots</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          itaque eos illum necessitatibus, quas, dicta corporis cupiditate
          perferendis, vel maxime reprehenderit ratione rerum quaerat? Ipsa
          doloremque excepturi maiores obcaecati nisi.
        </p>
      </section>
      <nav>
        <NavLink path="/about/team">Team</NavLink>
        <NavLink path="/about/team">Vision</NavLink>
      </nav>

      <section>
        <Route path="/about/team" component={Team} />
        <Route path="/about/vision" component={Vision} />
      </section>
    </section>
  );
}
