import { Response, Request } from "express";
import db from '../db/book.db';
import { IBook } from '../models/Books'

export const renderBooks = (req: Request, res: Response): void => {
   db.get()
      .then((data) => {
         console.log('GET BOOKS')
         res.render('Books/books', { title: 'Books', books: data })
      })
      .catch(err => {
         console.log('[BooksController] Error al obtener libros' ,err)
         res.redirect('/')
      })
}

export const renderFormBook = (req: Request, res: Response): void => {
   res.render('Books/add', { title: 'Add book' })
}

export const addBook = (req: Request, res: Response): void => {
   const { title, author, isbn }: IBook = req.body;
   if(!title && !author && !isbn){
      console.error('[BooksController] Falta algún dato')
      res.redirect('/books/add');
      return;
   }
   // 9781524721251
   // 8498387078
   db.add({ title, author, isbn })
      .then((data) => {
         console.log('BOOK ADDED', data)
         res.redirect('/books')
      })
      .catch(err => {
         console.error('[BooksController]', err)
         res.redirect('/books/add')
      })
}
