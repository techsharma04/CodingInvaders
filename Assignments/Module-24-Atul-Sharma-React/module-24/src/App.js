import { Link } from "react-router-dom";

function App() {
    return (
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th><h2>Module 24 Assignments</h2></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>
                            <Link to="assignment1">
                                Assignment 1
                            </Link>
                        </th>
                    </tr>
                    <tr>
                        <td>
                            Write a function to call api to get bitcoin price in realtime and display it on a component. It should use the fetch function with get request.
                            <br />
                            API solution: https://api.coindesk.com/v1/bpi/currentprice.json
                        </td>
                    </tr>
                    <br /><br />
                    <tr>
                        <th>
                            <Link to="assignment2">
                                Assignment 2
                            </Link>
                        </th>
                    </tr>
                    <tr>
                        <td>
                            Create a component to call api to display a list of universities in India. Use the REST API given below. It should use the fetch function with get request.
                            <br />
                            API solution: http://universities.hipolabs.com/search?country=INdia
                        </td>
                    </tr>
                    <br /><br />
                    <tr>
                        <th>
                            <Link to="assignment3">
                                Assignment 3
                            </Link>
                        </th>
                    </tr>
                    <tr>
                        <td>
                            Write a function in ReactJS to call create a post on jsonplaceholder api.
                            <br />
                            It should use the fetch function and post request method.
                            <br />
                            Solution: https://jsonplaceholder.typicode.com/
                        </td>
                    </tr>
                    <br /><br />
                    <tr>
                        <th>
                            <Link to="assignment4">
                                Assignment 4
                            </Link>
                        </th>
                    </tr>
                    <tr>
                        <td>
                            Write a function in ReactJS to call update a post on jsonplaceholder api.
                            <br />
                            It should use the fetch function and post request method.
                            <br />
                            Solution: https://jsonplaceholder.typicode.com/
                        </td>
                    </tr>


                </tbody>
            </table>
        </div>
    )
}

export default App;