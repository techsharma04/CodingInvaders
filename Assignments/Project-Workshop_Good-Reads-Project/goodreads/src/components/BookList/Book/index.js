const Book = (props) => {
    const { title, image } = props.data;

    return (
        <div className="col-sm-3">
            <div className="card">
                <img src={image} alt="" className="card-img-top" />
                <div className="card-body">
                    {title}
                </div>
                <a href="#" className="btn btn-dark btn-block">Show Details</a>
            </div>
        </div>
    )
}

export default Book;