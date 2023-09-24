import { Link } from "react-router-dom";
import "./Card.css"

function Card(props) {
    
    return(
        <div className="card">
            <h2>{props.heading}</h2>
            <p>{props.text}</p>
            <Link to={`/details/${props.heading}`}>
            <button>Read more</button>
            </Link>
        </div>
    )
}

export default Card;