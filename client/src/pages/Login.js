import { React, useState } from "react";
import Navbar from "../components/Navbar";
import * as userService from '../services/user'

const Home = () => {

  const [loginData, setLoginData] = useState([]);
  const [userData, setUserData] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUserData(userService.loginUser(loginData))
  };

  return (

    <>
      <Navbar />

      <div class="container mt-4">
        <div class="card">

          <div class="card-header">
            Login Form
          </div>

          {userData.error ? <h5 class="alert alert-danger mt-4">{userData.error}</h5> : '' }

          <div class="card-body">

            <form onSubmit={handleSubmit} >

              <div class="mb-3">
                <label class="form-label">Email Address</label>
                <input
                  onChange={(e) =>
                    setLoginData({ ...loginData, Email: e.target.value })
                  }
                  type="email"
                  class="form-control"
                  name="Email"
                />
              </div>

              <div class="mb-3">
                <label class="form-label">Password</label>
                <input
                  onChange={(e) =>
                    setLoginData({ ...loginData, Password: e.target.value })
                  }
                  type="password"
                  class="form-control"
                  name="Password"
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