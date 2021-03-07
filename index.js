var express = require('express');
const ejs = require('ejs');
var app = express();


const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'));

// Express HBS 
// hbs.registerPartials(__dirname + '/views/partiars');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index')
})


app.listen(port, () => {
    console.log(`Server running in port: ${port}`);
})