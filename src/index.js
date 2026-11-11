import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import pizzaData from './data.js';

function Header({ isOpen }) {
  return (
    <header className="header">
      <h1 style={{ textAlign: 'center' }}>Don't Buy Pizza Here .Co</h1>
      {isOpen && (
        <p style={{ textAlign: 'center' }}>
          Authentic Italian Cuisine
        </p>
      )}
    </header>
  );
}

function Pizza({ pizza }) {
  return ( 
    <li className={`pizza ${pizza.soldOut ? "sold-out" : ""}`}>
      <img src={`/${pizza.photoName}`} alt={pizza.name} />
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <span>{pizza.soldOut ? "SOLD OUT" : `$${pizza.price}`}</span>
      </div>
    </li>  
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      
      <ul className="pizzas">
          {pizzaData.map((pizza) => (
          <Pizza pizza={pizza} key={pizza.name} />
        ))}
          </ul>
    </main>
  );
}

// Requirement 5: Extracting the Order section into its own component
function Order() {
  return (
    <div className="order">
      <p>We're currently open!</p>
      <button className="btn">Order</button>
    </div>
  );
}

// Requirement 3 & 5: Footer receives isOpen prop to conditionally render the Order component
function Footer({ isOpen }) {
  return (
    <footer className="footer">
      {isOpen ? <Order /> : <p>Sorry, we're closed.</p>}
    </footer>
  );
}

// Parent App Component
function App() {
  // Requirement 3: Conditional Rendering Logic (Open between 10am and 10pm)
  const currentHour = new Date().getHours();
  const isOpen = currentHour >= 10 && currentHour < 22; 

  return ( 
    <div className="container">
      <Header isOpen={isOpen} />
      <Menu />
      <Footer isOpen={isOpen} />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

//   function Pizza({ photoName, altText, ingredients }) {
//   return ( 
//     <div className="pizza">
//       <img src={`/${photoName}`} alt={altText} />
//       <div>
//         <h3>{altText}</h3>
//         <p>{ingredients}</p>
//       </div>
//     </div>  
//   );
// }



  // function Menu() {
  //   return (
  //     <main className="menu">
  //       <h2>Our Menu</h2>
  //       <div className="pizzas">
  //         {pizzaData.map((pizza) => (
  //           <Pizza 
  //             key={pizza.name} 
  //             photoName={pizza.photoName} 
  //             altText={pizza.name}
  //             ingredients={pizza.ingredients} 
  //           />
  //         ))}
  //       </div>
  //     </main>
  //   );
  // }

  // function Footer() {
  //   const currentHour = new Date().getHours();
  //   const isOpen = currentHour >= 10 && currentHour < 22; 

  //   return (
  //     <footer className="footer">
  //       {isOpen ? "We’re currently open" : "Sorry we’re closed"}
  //     </footer>
  //   );
  // }

  // function App() {
  //   return ( 
  //     <div className="container">
  //       <Header />
  //       <Menu />
  //       <Footer />
  //     </div>
  //   );
  // }

  // const root = ReactDOM.createRoot(document.getElementById('root'));
  // root.render(
  //     <App />
  // );

