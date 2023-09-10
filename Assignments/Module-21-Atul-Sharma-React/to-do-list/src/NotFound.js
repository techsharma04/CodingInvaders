
import { Link } from "react-router-dom";


function NotFound() {

    return (
       <>
        <p>This page is not available</p>
        
      <Link to={'/login'}>Go to login</Link>
      </>
    )

}

export default NotFound