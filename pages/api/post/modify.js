import { connectDB } from '../../../src/util/database';
import { ObjectId } from 'mongodb';

export default async function modifyAPI(req, res) {
  const client = (await connectDB).db('next-board');
  const _req = JSON.parse(req.body);
  const { _id, ...content } = _req;

  await client.collection('post').updateOne({ _id: new ObjectId(_id) }, { $set: { ...content } });

  return res.status(200).json({ message: '성공' });
}
