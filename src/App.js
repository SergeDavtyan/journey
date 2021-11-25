import './App.css';
import Banner from './components/banner/Banner';
import Carousel from './components/carousel/Carousel';
import Explore from './components/explore/Explore';
import Header from './components/header/Header';
import Place from './components/places/Place';
import Countrys from './components/countrys/Countrys';

import IMG3 from "./img/tm-img-03.jpg";
import IMG2 from "./img/tm-img-02.jpg";
import IMG1 from "./img/tm-img-01.jpg";
import Map from './components/map/Map';
import Footer from './components/footer/Footer';


function App() {

  const images = [IMG1, IMG2, IMG3];

  return (
    <div className="App">

      <Header />
      <Banner />
      <Explore />

      <div className="place-container container">
        <Carousel
          images={images}
          arrowPos="arrow-right"
        />
        <Place pclass="p-blue p-right" />
      </div>

      <div className="place-container container">
        <Place pclass="p-pink p-left" />
        <Carousel
          images={images}
          arrowPos="arrow-left"
        />
      </div>

      <div className="place-container container">
        <Carousel
          images={images}
          arrowPos="arrow-right"
        />
        <Place pclass="p-blue p-right" />
      </div>

      <div className="container">
        <Countrys />
      </div>

      <Map />
      <Footer />

    </div>
  );
}

export default App;
