import { Schema, model, Document } from 'mongoose';

export interface IBook {
   title: string;
   author: string;
   isbn: string;
}

const BookSchema: Schema = new Schema({
   title: {
      type: String,
      required: true,
   },
   author: {
      type: String,
      required: true
   },
   isbn: {
      type: String,
      required: true,
      unique: true
   }
},
{
   timestamps: true
})


export default model('Book', BookSchema, 'books')