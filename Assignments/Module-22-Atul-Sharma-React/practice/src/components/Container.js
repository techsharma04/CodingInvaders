import Card from "./Card";
import "./Container.css";
import { useState, useEffect } from "react";

function Container() {

    const [allPosts, setPosts] = useState([]);
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setPosts(data));
      }, []);

    const content = allPosts.map((each=> (
        <Card smallText={each.id} heading={each.title} text={each.body} key={each.id}/>
    )))

    return( 
        <div className="container">
            {content}
        </div>
    )
    
}

export default Container;