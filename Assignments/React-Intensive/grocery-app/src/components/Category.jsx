const Category = (props) => {
    const { catId, catName, catImage } = props.data
    return (

        <div class="col-lg-3 col-md-6 col-sm-6">
            <div id="ho_bo" class="our_products">
                <div class="product">
                    <figure><img src={'http://rjtmobile.com/grocery/images/' + catImage} class="card-img-top" alt="..." /></figure>
                </div>
                <h3>{catName}</h3>
                <div class="d-grid gap-2">
                    <button type="button" class="btn btn-outline-danger">Select</button>
                </div>
            </div>
        </div>
    )
}

export default Category;