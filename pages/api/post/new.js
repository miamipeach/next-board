import { connectDB } from '../../../src/util/database';

export default async function newAPI(req, res) {
  const client = (await connectDB).db('next-board');
  await client.collection('post').insertOne(JSON.parse(req.body));

  return res.status(200).json({ message: '성공' });
}
