

import { useState, useEffect } from "react";

function AssignmentFirst() {

    const [uniData, setUniData] = useState([]);
    
    useEffect(() => {
        fetch('http://universities.hipolabs.com/search?country=INdia')
        .then(response => response.json())
        .then(data => setUniData(data));
      }, []);

   

    return (

        <div className="container">
            <h3>List of Universities in India</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">University Name</th>
                        <th scope="col">Country Name</th>
                    </tr>
                </thead>
                <tbody>
                    {uniData.map((e=> (
                        <tr>
                            <td>{e.name}</td>
                            <td>{e.country}</td>
                        </tr>
                    )))}
                </tbody>
            </table>


        </div>
    )

}

export default AssignmentFirst;