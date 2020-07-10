import Book, { IBook } from '../models/Books'

const add = (book: IBook) => (
   new Book(book).save()
)

const get = () => (
   Promise.resolve(Book.find({}))
)

const db = {
   add,
   get
}

export default db;