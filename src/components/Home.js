import React from 'react'
import Image from "../../src/svg.png";
import {Link} from "react-router-dom";

function Home() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>
          Shop with <br /> Style
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est, omnis
          quo eos placeat assumenda pariatur cumque qui molestias inventore iste
          hic commodi, ipsam quis dolorum.
        </p>
        <button>
          <Link to="/shop">Shop Now!</Link>
        </button>
      </div>
      <div className="hero-right">
        <img src={Image} alt="Background" />
      </div>
    </section>
  );
}

export default Home