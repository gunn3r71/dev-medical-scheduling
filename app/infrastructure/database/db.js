import { Mongoose } from "mongoose";

const mongoose = Mongoose;

const { DB_USER, DB_PASS, DB_HOST, DB_PORT = 27017, DB_NAME } = process.env;

if (DB_HOST || DB_NAME || DB_USER || DB_PASS) {
  throw new Error("Missing environment variables for database connection");
}

for (let i = 0; i < 3; i++) {
  try {
    await mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
      user: DB_USER,
      pass: DB_PASS
    });
  } catch (error) {
    console.error("Error connecting to database", error);
    
    if (i < 2) {
      console.log("Retrying...");
      continue;
    }

    process.exit(-1); 
  }
}


const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));

db.once('open', () => {
  console.log('Connected to database');
});

export default db;