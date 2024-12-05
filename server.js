const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const port = 3000;
app.use(bodyParser.json());
let articles = [
    {id: 1, title: 'Article 1', content: 'This is article 1 content'},
    {id: 2, title: 'Article 2', content: 'This is article 2 content'},
    {id: 3, title: 'Article 3', content: 'This is article 3 content'},
    
];
app.get('/',(req,res) => {
    res.send('Hello World!');
});

app.get('/articles',(req,res) => {

    res.json(articles);
});

app.listen(port,() => {
    console.log(`Server running on port ${port}`);
});

app.post('/articles',(req,res) =>{
    const newArticle = req.body;
    newArticle.id = articles.length + 1;
    articles.push(newArticle);
    res.status(201).json(newArticle);
})
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
