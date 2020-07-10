import mongoose from 'mongoose';

const MONGODB_URI: string = process.env.MONGODB_URI || ''

mongoose.connect(MONGODB_URI, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
   useCreateIndex: true
})
.then(() => console.log('[DB] Connected'))
.catch(err => console.error('[DB]', err))