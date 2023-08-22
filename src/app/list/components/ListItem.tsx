'use client';

import { useRouter } from 'next/navigation';

export interface IDetail {
  _id: string;
  title: string;
  subtitle: string;
  content: string;
}

interface IProps {
  item: IDetail;
  index: number;
}
export default function ListItem(props: IProps) {
  const { item, index } = props;
  const router = useRouter();

  return (
    <div
      className="list-item"
      key={`${item.title}_${index}`}
      onClick={() => router.push(`/detail/${item._id}`)}
    >
      <h4>{item.title}</h4>
      <p>{item.content}</p>
    </div>
  );
}
