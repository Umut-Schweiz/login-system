import React from "react";
import Navbar from "../components/Navbar";


const Home = () => {
  return (

    <>
      <Navbar />

      <div className="container mt-4">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Login Project</h1>
          <p className="col-md-8 fs-4">Using a series of utilities, you can create
            this jumbotron, just like the one in previous versions of Bootstrap.
            Check out the examples below for how you can remix and restyle it to
            your liking.</p>
          <button className="btn btn-primary btn-lg" type="button">Example button</button>
        </div>
      </div>
    </>

  )
}

export default Home;