import db from "../models/index.js"
import config from "../config/auth.config.js"
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";


const User = db.user;

const Op = db.Sequelize.Op;


const signup = (req, res) => {

    const Password = req.body.Password;
    const PasswordConfirm = req.body.PasswordConfirm;
     
    /**
    const name = req.body.name;
    const email = req.body.email;
    long version of the code below

    const {Name, Email, Password , PasswordConfirm} = req.body;
     */

    if(Password !== PasswordConfirm) {
        return res.send({
            message: 'Passwords do not match'
        })
    }else { // here It should be checked for reuse of mail and name

          // Save User to Database
          User.create({
            Name: req.body.Name,
            Email: req.body.Email,
            Password: bcrypt.hashSync(req.body.Password, 8)
        })
            .then(() => {
                res.send({ message: "User was registered successfully!" });
            })
            .catch(err => {
                res.status(500).send({ message: err.message });
            });
    }
    
};

const signin = (req, res) => {
    User.findOne({
        where: {
            Email: req.body.Email
        }
    })
        .then(user => {
            if (!user) {
                return res.status(404).send({ message: "User Not found." });
            }

            let passwordIsValid = bcrypt.compareSync(
                req.body.Password,
                user.Password
            );

            if (!passwordIsValid) {
                return res.status(401).send({
                    accessToken: null,
                    message: "Invalid Password!"
                });
            }

            let token = jwt.sign({ id: user.id }, config.secret, {
                expiresIn: 86400 // 24 hours
            });

            res.status(200).send({
                id: user.id,
                Name: user.Name,
                Email: user.Email,
                accessToken: token,
                message: "User was logged successfully."
            });

          
        }).catch(err => {
            res.status(500).send({ message: err.message });
        });
};

const authController = {
    signin: signin,
    signup: signup
};

export default authController;