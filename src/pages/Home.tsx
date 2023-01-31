import React from "react";

import CardBlog from "../components/CardBlog";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="mt-6 mb-6">
        <CardBlog />
      </div>
    </div>
  );
}

export default Home;
