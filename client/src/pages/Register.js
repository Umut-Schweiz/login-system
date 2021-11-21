import { React, useState } from "react";
import Navbar from "../components/Navbar";
import * as userService from '../services/user'

const Register = () => {


    const [newUser, setNewUser] = useState([]);
    const [passwordConfirmError, setPasswordConfirmError] = useState(false);
    const [userRegistered, setuserRegistered] = useState(false);


    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(newUser)

        if (newUser.Password === newUser.ConfirmPassword) {
            userService.registerUser(newUser)
            setuserRegistered(true)
            console.log(newUser)
        }else {
            setPasswordConfirmError(true)
        }

    };


    return (
        <>
            <Navbar />

            <div className="container mt-4">

                <div className="card">

                    <div className="card-header">
                        Register Form
                    </div>

                    <div className="card-body">
                        <form onSubmit={handleSubmit}>

                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                <input
                                    onChange={(e) =>
                                        setNewUser({ ...newUser, Name: e.target.value })
                                    }
                                    type="text"
                                    className="form-control"
                                    name="Name"
                                />
                            </div>

                            <div className="mb-3">
                                <label  className="form-label">Email Address</label>
                                <input
                                    onChange={(e) =>
                                        setNewUser({ ...newUser, Email: e.target.value })
                                    }
                                    type="email"
                                    className="form-control"
                                    name="Email"
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input
                                    onChange={(e) =>
                                        setNewUser({ ...newUser, Password: e.target.value })
                                    }
                                    type="password"
                                    className="form-control"
                                    name="Password"
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Confirm Password</label>
                                <input
                                    onChange={(e) =>
                                        setNewUser({ ...newUser, ConfirmPassword: e.target.value })
                                    }
                                    type="password"
                                    className="form-control"
                                    name="PasswordConfirm"
                                />
                            </div>

                            <button type="submit" className="btn btn-primary">Register User</button>

                        </form>

                    </div>
                </div>

                {passwordConfirmError ? <h4 className="alert alert-danger mt-4">Passwords do not match</h4> : ''}
                {userRegistered ? <h4 className="alert alert-danger mt-4">User regisired</h4> : ''}


            </div>
        </>
    )
}

export default Register;