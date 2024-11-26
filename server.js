import express from 'express';
import routes from './src/routes/postsroutes.js';

const posts = [
    { id: 1, descricao: 'Foto teste', imagem: 'https://placecats.com/millie/300/150' },
    { id: 2, descricao: 'Paisagem incrível', imagem: 'https://placecats.com/millie/300/150' },
    { id: 3, descricao: 'Receita de bolo de chocolate', imagem: 'https://placecats.com/millie/300/150' },
  ];

const app = express();
app.use(express.static('uploads'))
routes(app);

app.listen(3000, () => {
    console.log('servidor escutando...');
});



