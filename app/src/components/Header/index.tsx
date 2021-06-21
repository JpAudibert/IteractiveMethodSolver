import React from 'react';
import { NavLink } from 'react-router-dom';

import { Container } from './styles';

import logo from '../../assets/logo_univates.svg';

const Header: React.FC = () => (
  <>
    <Container>
      <header>
        <img src={logo} alt="Univates" />
        <nav>
          <>
            <NavLink
              to="/"
              activeStyle={{
                textDecoration: 'underline',
              }}
            >
              Jacobi - 2 x 2
            </NavLink>
            <NavLink
              to="/jacobi-3"
              activeStyle={{
                textDecoration: 'underline',
              }}
            >
              Jacobi - 3 x 3
            </NavLink>
            <NavLink
              to="/gauss-2"
              activeStyle={{
                textDecoration: 'underline',
              }}
            >
              Gauss-Seidel - 2 x 2
            </NavLink>
            <NavLink
              to="/gauss-3"
              activeStyle={{
                textDecoration: 'underline',
              }}
            >
              Gauss-Seidel - 3 x 3
            </NavLink>
          </>
        </nav>
      </header>
    </Container>
  </>
);

export default Header;
