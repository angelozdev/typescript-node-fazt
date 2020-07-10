import express, { Application } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import morgan from 'morgan';

/* Routes */
import indexRoutes from './routes/index.routes';
import booksRoutes from './routes/books.routes'

// Initializations
const app: Application = express()
dotenv.config()

// Settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '../views'));

// Middleware
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))

// Routes
app.use('/', indexRoutes)
app.use('/books', booksRoutes)

// Static Files
app.use(express.static(path.join(__dirname, '../public')))


export default app;