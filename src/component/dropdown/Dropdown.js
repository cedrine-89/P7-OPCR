import './Dropdown.scss';
import { useState } from "react";
import arrow_up from './img/arrow_up.png';

export default function Dropdown({ status, listing, title, children }) {
  const [open, setOpen] = useState(status);

  return (
    <div className="Dropdown">
      <div className="Dropdown_Title" onClick={() => setOpen(!open)}>
        <span>{title}</span>
        <img className={open ? "Dropdown_Title_Close_Active" : "Dropdown_Title_Close"} src={arrow_up} alt="" />
      </div>
      <div className={open ? "Dropdown_Content Active" : "Dropdown_Content InActive"}>
        {!listing && children}
        {listing &&
          <ul>
          {children.map((item, index) => {
            return <li key={`${index}-${Math.random()}`}>{item}</li>;
          })}
        </ul>}
      </div>
    </div>
  );
}
