const  request  = require("express");
const app = request();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');
app.get('/categories', (req,res)=>{
    res.send(categories);
})

app.get('/', (req, res)=>{
    res.send('News is Coming Soon..') 
});
 app.listen(port, ()=>{
    console.log(`Latest News is Coming on Port : ${port}`);    
 })