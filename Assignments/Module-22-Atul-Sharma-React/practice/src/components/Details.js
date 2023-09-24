import { useParams } from "react-router-dom"


function Details() {

    let { title } = useParams();
    return(
        <h2>This is {title}</h2>
    )
    
}

export default Details;