import './Dropdown.scss';
import { useState } from "react";
import arrow_up from './img/arrow_up.png';
import arrow_down from './img/arrow_down.png';

export default function Dropdown({ status, listing, title, children }) {
  const [open, setOpen] = useState(status);
  const elements = [];

  return (
    <div className="Dropdown">
      <div className="Dropdown_Title">
        <span>{title}</span>
        <img className="Dropdown_Title_Close" src={open ? arrow_up : arrow_down} alt="" onClick={() => setOpen(!open)} />
      </div>
      {open && <div className="Dropdown_Content">
        {!listing && children}
        {listing && children.map((item, index) => {
          elements.push(<li key={`${index}-${Math.random()}`}>{item}</li>);
        })}
        {listing && <ul>{elements}</ul>}
      </div>}
    </div>
  );
}
