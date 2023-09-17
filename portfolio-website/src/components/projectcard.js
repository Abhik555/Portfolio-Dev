import './styles/projcard.css';

function Projectcard(props) {
  return (
    <div className="projcard">
      <div className="projimg">
        <img src={props.img} alt={props.title}></img>
      </div>
      <div className="projdisc">
        <h2><b>{props.title}</b></h2>
      </div>
    </div>
  );
}

export default Projectcard;
