import cors from 'cors';
import express from 'express';
import multer from 'multer';
import { atualizarNovoPost, listarPosts, postarNovoPost, uploadImagem } from '../controller/postsController.js';

const corsOption = {
    origin: 'http://localhost:8000',
    optionSuccessStatus: 200
}


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({ dest: "./uploads" , storage})

const routes = (app) => {
    app.use(express.json());
    app.use(cors(corsOption));
    app.get('/posts', listarPosts);  
    app.post('/posts', postarNovoPost); 
    app.post('/upload', upload.single('imagem'), uploadImagem);
    app.put('/upload/:id', atualizarNovoPost);
}

export default routes;


