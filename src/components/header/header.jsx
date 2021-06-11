import { useState } from "react";
import "./style.css";

function Header() {
  const [value, setValue] = useState("");
    
  return (
    <section className="header">
      <div className="col">
        <img className="logo" src="./Logo.png" alt="logo" />
        <input
          onChange={(event) => {
            setValue(event.target.value);
            
          }}
          value={value}
          type="text"
          placeholder="search..."
          className="search"
        />
      </div>
    </section>
  );
}

export default Header;
