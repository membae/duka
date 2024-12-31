import React from "react";
import Navbar from "../Navbar";

function Home() {
  return (
    <div >
      <Navbar/>
      {/* Title Section */}
      <div className="flex items-center justify-center mb-8">
        <h1 className="text-3xl font-bold">Happy shopping</h1>
      </div>

      {/* Image and Text Section 1 (Image first) */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <div>
          <img
            src="/Home1.jpg"
            alt="Home Image"
            className="w-3/4 md:w-1/3 object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="text-center md:text-left max-w-lg">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
            quibusdam qui atque libero, corrupti nostrum possimus eaque dicta
            nam, cum iure! Maxime sit dicta non iure doloribus fuga ea sapiente.
          </p>
        </div>
      </div>

      {/* Image and Text Section 2 */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-8">
        <div>
          <img
            src="/Home1.jpg"
            alt="Home Image"
            className="w-3/4 md:w-1/3 object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="text-center md:text-left max-w-lg">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
            quibusdam qui atque libero, corrupti nostrum possimus eaque dicta
            nam, cum iure! Maxime sit dicta non iure doloribus fuga ea sapiente.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
