import { connectDB } from '../../../src/util/database';
import { ObjectId } from 'mongodb';

export default async function deleteAPI(req, res) {
  const client = await connectDB;
  const boardDB = client.db('next-board');
  const _req = JSON.parse(req.body);

  await boardDB.collection('post').deleteOne({ _id: new ObjectId(_req._id) });
  return res.status(200).json({ message: '삭제 성공', id: _req._id });
}
