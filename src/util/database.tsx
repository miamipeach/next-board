import { MongoClient, MongoClientOptions } from 'mongodb';

const url =
  'mongodb+srv://miamipeach1020:1q2w3e4r@cluster0.grmithi.mongodb.net/?retryWrites=true&w=majority';
const options: MongoClientOptions = {};

let connectDB: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect();
  }

  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(url, options).connect();
}

export { connectDB };
