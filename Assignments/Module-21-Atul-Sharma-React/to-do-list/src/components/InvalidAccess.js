import React from "react"
import { useNavigate } from "react-router-dom"

const InvalidAccess = () => {

    let navigate = useNavigate();
    function redirectLogin() {
        navigate("/login", true)
    }
    return(
        <>
        <p>Invalid Credentials, Please verify your creds.</p>
        <form>
        <button onClick={redirectLogin}>Log Back In</button>
        </form>
        </>
    )
}

export default InvalidAccess