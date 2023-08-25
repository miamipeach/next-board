import ListItem, { IDetail } from '@/app/list/components/ListItem';
import React from 'react';

interface IProps {}

const List: React.FC<IProps> = async ({}) => {
  const list = await getList();

  return (
    <>
      <div className="list-bg">
        {list.map((b: IDetail, index: number) => (
          <ListItem item={b as unknown as IDetail} index={index} key={`${b.title}_${index}`} />
        ))}
      </div>
    </>
  );
};

export default List;

async function getList() {
  const api = await fetch('http://localhost:3000/api/list');
  const res = await api.json();
  return res.data;
}
