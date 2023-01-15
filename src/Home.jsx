import blue from './assets/blue.png';
import black from './assets/black.png';
import silver from './assets/silver.png';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { useState } from 'react';

function Home() {
  const [bigCan, setBigCan] = useState(blue);
  return (
    <>
      <div className='home'>
        <div className="text-side">
          <h1>That's what <br /> <span>I like</span></h1>
          <p>A build command that bundles your code with Rollup,

            Vite is opinionated and comes with sensible defaults out of the box, but is also highly extensible via its Plugin API and JavaScript API with full typing support.</p>
          <a href="#" className="products-btn">View all products</a>
        </div>
        <div className="image-side">
          <img src={bigCan} alt="" />
        </div>
        <div className="icons">
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
        </div>
      </div>
      <div className="small-cans">
        <img src={blue} alt="" onClick={() => setBigCan(blue)} />
        <img src={black} alt="" onClick={() => setBigCan(black)} />
        <img src={silver} alt="" onClick={() => setBigCan(silver)} />
      </div>
    </>
  )
}
export default Home;