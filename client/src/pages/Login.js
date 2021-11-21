import React from "react";
import Navbar from "../components/Navbar";


const Home = () => {
  return (

    <>
      <Navbar />

      <div class="container mt-4">
        <div class="card">

          <div class="card-header">
            Login Form
          </div>

          <h5 class="alert alert-danger mt-4">message</h5>

          <div class="card-body">
            
            <form >

              <div class="mb-3">
                <label for="email" class="form-label">Email Address</label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  name="email"
                />
              </div>

              <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  name="password"
                />
              </div>

              <button type="submit" class="btn btn-primary">Login</button>
            </form>
          </div>
        </div>

      </div>
    </>

  )
}

export default Home;