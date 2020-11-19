import React, { useState, useEffect } from "react";

function Menu(props) {
  const [open, setOpen] = useState(false);
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log('es')
  })
  return (
    <>
      <div className="menu-container">
        <button
          onClick={() => {
            setOpen(!open);
          }}
          className="dd-button"
        >
          {counter} гостей
        </button>
        {open ? <Nav /> : null}
      </div>
    </>
  );
}

function MenuItem(props) {
  const [counter, setCounter] = useState(0);

  return (
    <div className="menu-item">
      <span className="menu-item__name">{props.name}</span>
      <div className="counter">
        <button
          className="counter__button"
          onClick={() => {
            setCounter(counter > 0 ? counter - 1 : counter - 0);
          }}
        >
          -
        </button>
        <span className="guestCounter">{counter}</span>
        <button
          className="counter__button"
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
function Nav() {
  return (
    <nav className="dd-nav">
      <MenuItem name="Взрослые"></MenuItem>
      <MenuItem name="Дети"></MenuItem>
      <MenuItem name="Младенцы"></MenuItem>
    </nav>
  );
}

export default Menu;
