import express from "express";
import cors from "cors";
import { Pool }from "pg";
import 'dotenv/config';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());


const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});
app.listen(PORT, () => {
    console.log("Listening..");
})

pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client:', err.stack);
  }
  console.log('Connected to PostgreSQL database');
  release();
});