import 'dotenv/config';
import app from './app.js';

const PORT = process.env.PORT || 8000

//database
import connectDB from './db/index.js';
connectDB();


try {
    app.listen(PORT, ()=>{
        console.log(`server is runing on port http://localhost:${PORT}`)
    });
} catch (error) {
    console.log(`-----Server err-----------${error}`)
}