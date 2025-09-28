const express = require('express')
const {connecttodb} = require('./db/db')
require('dotenv').config();
const productroutes = require('./routes/productroutes')
const cors = require('cors')

const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;

const app = express();
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))

app.use(express.json());

connecttodb(DB_URL);

app.get('/',(req,res)=>{
    res.send("1st step completed!!!");
})

app.use('/Api/products',productroutes);

app.listen(PORT,()=>{
    console.log("Server is running on port 3000")
});