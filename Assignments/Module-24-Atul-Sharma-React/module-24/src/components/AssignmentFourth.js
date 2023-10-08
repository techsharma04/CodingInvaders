
function AssignmentFourth() {



    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'PUT',
        body: JSON.stringify({
            id: 1,
            title: 'Assignment 4',
            body: 'Module 24',
            userId: 24,
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

export default AssignmentFourth;