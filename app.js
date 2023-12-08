import express from 'express';
import dotenv from 'dotenv';
import router from './routes/index.routes.js';

dotenv.config();
const {HTTP_PORT} = process.env;
const app = express();

app.use(router);


app.listen(HTTP_PORT, ()=>{
    console.log(`Servidor corriendo en http://localhost:${HTTP_PORT}`);
})