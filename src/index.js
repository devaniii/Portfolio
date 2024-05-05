import express from 'express';
import mongoose from 'mongoose';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import indexRoutes from './routes/routes.js'
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const __dirname = dirname(fileURLToPath(import.meta.url));

app.set('views', join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(indexRoutes);

const publicPath = join(__dirname, '..', 'public');
app.use(express.static(publicPath));

// Ruta para servir archivos SVG desde la carpeta public/svg
const svgPath = join(__dirname, '..', 'public', 'svg');
app.use('/svg', express.static(svgPath));

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error(error));

app.listen(port, () => console.log('Server listening on port', port));
