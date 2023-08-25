import { connectDB } from '@/util/database';
import { ObjectId } from 'mongodb';
import ModifyButton from '@/app/modify/[id]/components/ModifyButton';

interface IProps {
  params: { id: string };
}

export default async function Modify(props: IProps) {
  const id = props.params.id;

  const client = await connectDB;
  const boardDB = client.db('next-board');

  const detail = await boardDB.collection('post').findOne({ _id: new ObjectId(id) });

  if (!detail) return null;

  return (
    <div>
      <h4>수정페이지</h4>
      <p>title</p>
      <input defaultValue={detail.title} name={'title'} type="text" id={'title'} />
      <p>subtitle</p>
      <input defaultValue={detail.subtitle} name={'title'} type="text" id={'subtitle'} />
      <p>content</p>
      <input defaultValue={detail.content} name={'title'} type="text" id={'content'} />
      <ModifyButton id={detail._id.toString()} />
    </div>
  );
}
