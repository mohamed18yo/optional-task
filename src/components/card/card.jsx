

import './style.css'
function Card(props) {
  return (


    <div className="card">
      <img src={props.src} alt={props.title} />
      <h3>{props.title}</h3>
      <p>Description {props.title}</p>
    </div>
  );
}  
export default Card;
