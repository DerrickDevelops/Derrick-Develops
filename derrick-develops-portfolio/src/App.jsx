import React from 'react';
import Header from './Header.jsx'
import Content from './Content.jsx'
import Footer from './Footer.jsx'
import Nav from './Nav.jsx'
import './layout.css';

function App() {
  return (
    <div className="main">
    <Nav />
    <Header />
    <Content />
    <Footer />
    </div>
  );
}

export default App;