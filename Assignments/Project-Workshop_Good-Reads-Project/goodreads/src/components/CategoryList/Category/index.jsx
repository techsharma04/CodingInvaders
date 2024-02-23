const Category = (props) => {
    const { catId, catName, catImage } = props.data;

    return (
        <div className="col-md-3">
            <div className="card">
                <img src={catImage} className="card-img-top" alt="..." height="200" width="400" />
                <div className="card-body">
                    <h5 className="card-title">{catId}{catName}</h5>
                </div>
            </div>
        </div>
    )
}

export default Category