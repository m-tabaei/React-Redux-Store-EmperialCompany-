function Subscribe() {
  return (

    <section className="subscribe section Contact container" id="Contact">
      <div className="subscribe_bg">
        <div className="subscribe_container container">
          <h2 className="sectionTitle subscribe_title">
            Subscribe Our
            {' '}
            <br />
            Newsletter
          </h2>
          <p className="subscribe_description">
            Subscribe to our newsletter and get a special 30% discount.
          </p>

          <form action="" className="subscribe_form">
            <input
              type="text"
              placeholder="Enter email"
              className="subscribe_input"
            />

            <button className="button">Subscribe</button>
          </form>
        </div>
      </div>
    </section>

  );
}

export default Subscribe;
