import Container from "./Container";
import "./TopHeader.css"

function TopHeader() {
    return(
        <div className="header">
            <section className="section">
            <h1>Popular News and Blogs</h1>
            <p>Within the realm of trending news and blogs, you'll find a diverse and engaging collection of content that captures the pulse of current discussions.</p>
            </section>
            <Container/>
        </div>
    )
    
}

export default TopHeader;