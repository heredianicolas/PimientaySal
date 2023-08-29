const express = require('express');
const app = express();
const mainRouter = require('./routes/mainRoutes');
const PORT = 3030;

app.use(express.static("public"));

app.set('view engine','ejs');
app.set('views','./src/views');


app.use(mainRouter);

app.listen(PORT, ()=>console.log("escuchando en el servidor 3030"));