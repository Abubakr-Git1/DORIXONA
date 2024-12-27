const dotenv = require('dotenv');
dotenv.config()
const express = require('express');
const PORT = process.env.PORT

const mainRouter = require('./routers');

const main = express()

main.use(express.json()); //POST body ichida kelayotgan JSON ma'lumotlarni parse

main.use("/api", mainRouter);

main.listen(PORT, ()=>{
    console.log(`Server started at: http://localhost:${PORT}`);
})