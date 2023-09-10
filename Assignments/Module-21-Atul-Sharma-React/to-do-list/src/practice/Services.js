
function Services(props) {
    return (
            <section className="panel" style={{backgroundImage:`url(${props.img})`}}>
                <h3 className="head3">{props.heading3} </h3>
                <h1 className="head1">{props.heading1}</h1>
                <button className="btn">{props.button}</button>
            </section>

    )
}

export default Services