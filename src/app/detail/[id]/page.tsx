import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';

interface IProps {
  params: { id: string };
}

export default async function Detail(props: IProps) {
  const id = props.params.id;

  const client = await connectDB;
  const boardDB = client.db('next-board');

  const detail = await boardDB.collection('post').findOne({ _id: new ObjectId(id) });

  if (!detail) return null;

  return (
    <div>
      <h4>상세페이지</h4>
      <h4>{detail.title}</h4>
      <h4>{detail.subtitle}</h4>
      <p>{detail.content}</p>
    </div>
  );
}
