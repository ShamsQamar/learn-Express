const express = require('express')
const app = express()
const path = require('path')
const port = 3001

var exphbs  = require('express-handlebars');
var hbs = exphbs.create({ /* config */ });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'static')))

app.use('/', require(path.join(__dirname, 'routes/blogRoutes.js')))






app.listen(port, ()=>{
    console.log(`blog is listening in ${port}`)
})