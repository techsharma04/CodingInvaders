import React, { useState, useEffect } from "react";
import axios from "axios";
import Category from './Category';

const CategoryList = () => {

    const [categories, setCategories] = useState([])

    const fetchData = () => {
        axios.get('https://orca-app-jhg4l.ondigitalocean.app/api/category')
            .then(response => setCategories(response.data.data))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div class="products" id="categories">
            <div class="container">
                <div class="row">
                    <div class="col-md-7">
                        <div class="titlepage">
                            <h2>Our Products</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                {
                    categories.map((category) => <Category data={category} />)
                }
                </div>
            </div>
        </div>

    )
}

export default CategoryList;