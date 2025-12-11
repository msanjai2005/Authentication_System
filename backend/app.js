import express from 'express';
import { ConnectDB } from './config/dbConfig.js';
import 'dotenv/config';
import authRouter from './routers/auth.routes.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();

const PORT = process.env.PORT || 3000;
await ConnectDB();

app.use(cors({
    origin:process.env.FRONTEND_URL,
    credentials:true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders:["Content-Type","Authorization"]
}));

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth',authRouter);

app.listen(PORT,()=>{
    console.log('server is running on http://localhost:3000');
})