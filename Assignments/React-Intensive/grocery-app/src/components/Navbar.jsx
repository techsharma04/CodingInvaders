

function Navbar() {
    return (
        <nav className='header'>
            <div className="full-bg">
                <div className='nav-bar'>
                    <h2>Grocery Store</h2>
                    <ul className='nav-items'>
                        <li>Home</li>
                        <li>About</li>
                        <li><a href="#categories">Products</a></li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <section class="banner_main">
                    <div class="container" style={{width: `1170px`}}>
                        <div class="banner_po">
                            <div class="row">
                                <div class="col-md-7">
                                    <div class="text_box">
                                        <span>Now Started</span>
                                        <h1> <strong>Fruit And </strong> <br /> Vegetables </h1>
                                        <a class="read_more" href="#categories" role="button">Start Shopping</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </nav>
    )
}

export default Navbar;