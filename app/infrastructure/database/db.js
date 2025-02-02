import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const { DB_CONNECTION } = process.env;

if (!DB_CONNECTION) {
  throw new Error("Missing environment variables for database connection");
}

const connect = async () => {
  for (let i = 0; i < 3; i++) {
    try {
      await mongoose.connect(DB_CONNECTION);
      console.log('Connected to database');

      break;
    } catch (error) {
      console.error("Error connecting to database", error);
      if (i < 2) {
        console.log("Retrying...");
        continue;
      }
      process.exit(-1);
    }
  }
};

await connect();

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
  console.log('Connected to database');
});

db.on('disconnected', async () => {
  console.log('Database disconnected');
  await connect();
});

export default db;