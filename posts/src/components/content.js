import PropTypes from 'prop-types';
import React from 'react';
import Footer from './footer';
import NavBar from './Navbar';

const propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

const Layout = ({ children }) => (
  <>
    <NavBar />
    <div className="mainCon">
      <main>{children}</main>
    </div>
    <Footer>Copyright &copy;</Footer>
  </>
);

Layout.propTypes = propTypes;

export default Layout;
