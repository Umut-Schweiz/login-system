import express from "express"
import bodyParser from "body-Parser"
import cors from "cors"


// Routers
import userRouter from './routes/auth.routes.js'

const app = express();

const corsOptions = {
  origin: "http://localhost:8001"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple test route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to this application." });
});

app.use('/auth', userRouter)

// set port, listen for requests
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});