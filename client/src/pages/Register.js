import React from "react";
import Navbar from "../components/Navbar";

const Register = () => {
    return (

        <>
            <Navbar />

            <div class="container mt-4">
                <div class="card">

                    <div class="card-header">
                        Register Form
                    </div>

                    <div class="card-body">
                        <form action="/auth/register" method="POST">

                            <div class="mb-3">
                                <label for="name" class="form-label">Name</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="name"
                                    name="name"
                                />
                            </div>

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

                            <div class="mb-3">
                                <label for="passwordConfirm" class="form-label">Confirm Password</label>
                                <input
                                    type="password"
                                    class="form-control"
                                    id="passwordConfirm"
                                    name="passwordConfirm"
                                />
                            </div>

                            <button type="submit" class="btn btn-primary">Register User</button>
                        </form>
                    </div>
                </div>

                <h4 class="alert alert-danger mt-4">message</h4>

            </div>
        </>
    )
}

export default Register;