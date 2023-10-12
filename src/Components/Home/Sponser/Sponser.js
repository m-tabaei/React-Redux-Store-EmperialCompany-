import image1 from '../../../assets/sponser/sponsors1.png';
import image2 from '../../../assets/sponser/sponsors2.png';
import image3 from '../../../assets/sponser/sponsors3.png';
import image4 from '../../../assets/sponser/sponsors4.png';
import image5 from '../../../assets/sponser/sponsors5.png';

function Sponser() {
  return (
    <main>
      <section className="sponsor section container">
        <div className="sponsor_container container grid">
          <div className="sponsor_content">
            <img src={image1} alt="" className="sponsor_img" />
          </div>
          <div className="sponsor_content">
            <img src={image2} alt="" className="sponsor_img" />
          </div>
          <div className="sponsor_content">
            <img src={image3} alt="" className="sponsor_img" />
          </div>
          <div className="sponsor_content">
            <img src={image4} alt="" className="sponsor_img" />
          </div>
          <div className="sponsor_content">
            <img src={image5} alt="" className="sponsor_img" />
          </div>
        </div>
      </section>

    </main>
  );
}

export default Sponser;
