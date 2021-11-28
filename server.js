import express from 'express'
import session from 'express-session'


// Middlewares
import cookieParser from 'cookie-parser'
import cors from 'cors'
import helmet from 'helmet'
import bodyParser from 'body-parser'


import router from './routes/auth.js'

const app = express();
const rout = express.Router();

//Parse URL -encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({extended: false }));
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
//Parse JSON bodies (as sent by API clients)
app.use(express.json())
app.use(helmet())
app.use(cookieParser())
app.use(cors())



app.use('/auth', router);


app.listen(4000, () => {
    console.log("Server started on port")
})


