import { Link } from "react-router-dom";


const Category = (props) => {
    const { catId, catName, catImage } = props.data;

    return (
        <div className="col-md-3">
            <div className="card">
                <img src={catImage} className="card-img-top" alt="..." height="200" width="400" />
                <div className="card-body">
                    <Link to="/books">
                    <h5 className="card-title">{catName}</h5>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Category 