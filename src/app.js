import express from 'express';
import router from './routers/user.router.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'
const app = express();

import bodyParser from "body-parser";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));
app.use(cookieParser());
app.use(cors())


app.use('/api/v1', router);

export default app 