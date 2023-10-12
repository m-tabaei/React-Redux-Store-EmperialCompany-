function About() {
  return (
    <section className="about section" id="about">
      <div className="aboutContainer container grid">
        <div className="aboutdata">
          <h2 className="sectionTitle about_title">
            Lorem ipsum dolor sit,
            {' '}
            <br />
            amet consectetur adipisicing elit.
          </h2>
          <p className="about_description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
            aliquid minus aspernatur quae molestias ipsa laborum accusamus qui
            sequi accusantium beatae at, incidunt nesciunt possimus
            perspiciatis consequatur. Veniam, necessitatibus nihil.
          </p>
          <a href="https://www.facebook.com/" className="button">Reserve New Product</a>
        </div>

        <div className="about_img">
          <div className="about_img-overlay">
            <img src="https://github.com/m-tabaei/api-storeg-emperial/blob/main/img/place15.jpg?raw=true" alt="" className="about_img-two" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
