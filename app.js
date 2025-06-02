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

/* thi for deployment ---------start---------*/
const root = path.join(path.resolve(), "dist");
app.use(express.static(root));
/* tis depluy -------end----------*/

app.use(allRoutes);

/* this deplu -----start-------*/
app.get("*", (req,res)=>{
    res.sendFile("index.html", {root});
})

const port = process.env.PORT;
app.listen(port, ()=>{
    console.log("Server Running with port ", port);
})