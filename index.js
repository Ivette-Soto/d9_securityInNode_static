import express from 'express';
import { router as logins } from './routes/logins.js';
import { router as cases } from './routes/cases.js';

const app = express();

app.use(express.json());
app.use(express.static('static'));  // root route

// import routes
app.use("/casos", cases);
app.use("/SignIn", logins);

app.listen(3000,()=>{
    console.log("App listening at port 3000 🦜")
});