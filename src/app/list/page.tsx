import { connectDB } from '@/util/database';
import ListItem, { IDetail } from '@/app/list/components/ListItem';

export default async function List() {
  const client = await connectDB;
  const boardDB = client.db('next-board');

  const list = await boardDB.collection('post').find().toArray();

  return (
    <div className="list-bg">
      {list.map((b, index) => (
        <ListItem item={b as unknown as IDetail} index={index} key={`${b.title}_${index}`} />
      ))}
    </div>
  );
}
