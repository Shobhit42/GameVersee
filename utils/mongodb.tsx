// utils/mongodb.ts

import { MongoClient } from 'mongodb';

const { MONGODB_URI, MONGODB_DB } = process.env;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

if (!MONGODB_DB) {
  throw new Error('Please define the MONGODB_DB environment variable inside .env.local');
}

let cachedClient: MongoClient | null = null;
let cachedDb: any = null; // Adjust the type according to your MongoDB collections

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = await MongoClient.connect("mongodb+srv://amansyadav1999:KDjpPKieR7jrWVba@cluster0.5ianidw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

  const db = await client.db(MONGODB_DB);

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}
 
// amansyadav1999
// pass KDjpPKieR7jrWVba