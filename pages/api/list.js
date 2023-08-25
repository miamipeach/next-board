import { connectDB } from '../../src/util/database';

export default async function listAPI(req, res) {
  const client = await connectDB;
  const boardDB = client.db('next-board');

  const list = await boardDB.collection('post').find().toArray();

  return res.status(200).json({ data: list });
}
