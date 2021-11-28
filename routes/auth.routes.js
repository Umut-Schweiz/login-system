import express from 'express';

import  verifySignUp  from "../middleware/verifySignUp.js"
import controller from "../controllers/auth.controller.js"

const router = express.Router();

router.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
});

router.post("/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
    ],
    controller.signup
  );

router.post("/signin", controller.signin);

export default router