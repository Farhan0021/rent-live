import express from 'express';
import allRoutes from './routes/allRoutes.js';
import cors from 'cors'
import upload from 'express-fileupload'
import path from 'path';
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended : true }));
app.use(express.static(path.resolve()+"/assets"));
app.use(cors());
app.use(upload());

app.use(allRoutes);
const port = process.env.PORT;
app.listen(port, ()=>{
    console.log("Server Running with port ", port);
})