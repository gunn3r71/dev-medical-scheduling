import { Mongoose } from "mongoose";

const mongoose = Mongoose;

const { DB_HOST, DB_PORT = 27017, DB_NAME } = process.env;

if (DB_HOST || DB_NAME) {
  throw new Error("Missing environment variables for database connection");
}

mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));

db.once('open', () => {
  console.log('Connected to database');
});

export default db;