import React from "react";
import images from "./image.jpg";
function Home() {
  return (
    <main>
      <img src={images} alt="" className="images-1" />
      <section className="titel-images">
        <h1 className="title-hello">hello! Hamza</h1>
      </section>
    </main>
  );
}

export default Home;
