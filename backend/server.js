const express = require('express');
require('dotenv').config();


const app = express();
const port = process.env.PORT || 8081;

app.get("/", (req, res)=>{
    console.log(" this is home route");
});


app.listen(port, ()=>{
    console.log(`Server running on port no ${port}`);
})