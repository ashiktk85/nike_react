import React from "react";
import "./App.css";
// import ReactDOM from 'react-dom/client'

const title = (
  <a href="/">
  <img
    className="logo"
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmcxrGGJVDmrlaqj-KDV5EXL5XlUBrARSMRZ5GINl5argQQDhOqrPO6ig6gycq4zEzRkQ&usqp=CAU"
    alt=""
  />
  </a>
);

function Header(props) {
  return (
    <div className="header">
      {title}
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Shop</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}

function Body() {
  return (
    <h4>body content</h4>
  )
}

function Footer () {
  <h3>footer content</h3>
}

const  App = () => {
  return (
    <>
    <Header />
    < Body />
    <Footer />
    </>
  )
}



export default App;
