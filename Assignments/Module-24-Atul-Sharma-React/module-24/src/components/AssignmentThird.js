
function AssignmentThird() {



    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'Assignment 3',
            body: 'Module 24',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));



    return (

        <div className="container">
           <h1>Output will be shown in console. please press F12 to open console</h1>
        </div>
    )

}

export default AssignmentThird;