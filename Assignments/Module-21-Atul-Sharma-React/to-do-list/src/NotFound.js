

import react from "react";
import { useLocation } from "react-router-dom";


function NotFound() {
    let location = useLocation();

    console.log(location.pathname);

    return (
        <p>This page is not available</p>
    )

}

export default NotFound