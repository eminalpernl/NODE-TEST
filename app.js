import express from "express";
import moviesRouts from "./routes/movies.js"
import bodyParser from "body-parser";

const app = express()
const port = 3000;

//pars JSON using express
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

//init middleware
app.use(bodyParser.json())
app.use('/', moviesRouts )


// set the server listen at port
app.listen(port, ()=>console.log(`Server listening at port ${port}`))


