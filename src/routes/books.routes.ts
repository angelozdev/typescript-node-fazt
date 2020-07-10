import { Router } from 'express';
import { renderBooks, renderFormBook, addBook } from '../controllers/books.controller';

const router: Router = Router();


router.get('/', renderBooks);

/* Add book */
router.get('/add', renderFormBook);
router.post('/add', addBook)

export default router;