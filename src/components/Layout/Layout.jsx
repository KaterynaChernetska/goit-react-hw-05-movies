import css from './Layout.module.css';
import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

export const Layout = () => {
  const location = useLocation();
  return (
    <>
      <header className={css.header}>
        <nav className={css.navigation}>
          <NavLink
            state={{ from: location }}
            to="/"
            className={css.navLink}
            style={({ isActive }) => ({
              color: isActive ? '#d63031' : '#2d3436',
            })}
          >
            Home
          </NavLink>
          <NavLink
            state={{ from: location }}
            to="/movies"
            className={css.navLink}
            style={({ isActive }) => ({
              color: isActive ? '#d63031' : '#2d3436',
            })}
          >
            Movies
          </NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
