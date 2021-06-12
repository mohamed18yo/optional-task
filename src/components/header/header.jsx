import "./style.css";

function Header(props) {
  
    
  return (
    <section className="header">
      <div className="col">
        <img className="logo" src="./Logo.png" alt="logo" />
        <input
          onChange={props.onSearch}
          value={props.value}
          type="text"
          placeholder="search..."
          className="search"
        />
      </div>
    </section>
  );
}

export default Header;
