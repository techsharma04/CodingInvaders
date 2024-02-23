import styles from './styles.module.css';

const BookDetail = (props) => {
    const { title, description, image, author } = props.data;

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <div className={styles.wrapper} >
                        <img src={image} alt="" className="img-fluid" />
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className={styles.wrapper} >
                        <h1 className={styles.title}>{title}</h1>
                        <h2 className={styles.author}>{author} </h2>
                        <small>{description}</small>
                        <div className={styles.review}>
                            <h2>Write a Review</h2>
                            <small>What did you think?</small>
                            <textarea class="form-control" aria-label="With textarea" rows="6"></textarea>
                            <button type="submit" class="btn btn-primary btn-sm btn-block">Submit</button>
                        </div>
                    </div>
                    <div className={styles.rating}>
                        <h2 className={styles.title}>Rating & Reviews</h2>
                        <br />
                        <button type="button" class="btn btn-warning btn-sm btn-block">Write a Review</button>
                        <hr />
                        <small>Displaying 0 reviews</small>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default BookDetail