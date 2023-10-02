
import "./App.css";
import { useState, useEffect } from "react";

function App() {

    const [allCoins, setCoins] = useState([]);

    useEffect(() => {
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(res => res.json())
            .then(res => { setCoins(res) });
    }, []);


       

    return (
        <div className="container">

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allCoins.map(e=> (
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    ))
}
                </tbody>
            </table>

        </div>
    )

}

export default App;