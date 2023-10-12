import './HomeStyle.css';

import About from './About/About';
import Slider from './Slider/Slider';
import Info from './Info/Info';
import Experince from './Experince/Experince';
import Subscribe from './Subscribe/Subscribe';
import Sponser from './Sponser/Sponser';

function Home() {
  return (
    <>
      <Info />
      <About />
      <Slider />
      <Experince />
      <Subscribe />
      <Sponser />
    </>
  );
}

export default Home;
