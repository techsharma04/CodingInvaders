
import { useParams } from "react-router-dom"
import React, { useState, useEffect } from "react";

function AssignmentFirst() {
    let { title } = useParams();

    const [coinsData, setCoinsData] = useState(null);

    useEffect(() => {
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then((res) => res.json())
            .then((data) => setCoinsData(data));
    }, []);

    let currencyData = [];

    if (coinsData) {
        currencyData = Object.entries(coinsData.bpi);
    }

    return (

        <div className="container">
            <h3>Current Bitcoin price is:</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Currency</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {currencyData.map(([currency, details]) => (
                        <tr key={currency}>
                            <td>{currency}</td>
                            <td>{details.rate}</td>
                        </tr>
                    ))}
                </tbody>
            </table>


        </div>
    )

}

export default AssignmentFirst;