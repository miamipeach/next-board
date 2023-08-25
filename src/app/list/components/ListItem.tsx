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
    <div className="list-item" key={`${item.title}_${index}`}>
      <span onClick={() => router.push(`/detail/${item._id}`)}>
        <h4>{item.title}</h4>
        <p>{item.content}</p>
      </span>
      <button onClick={() => router.push(`/modify/${item._id}`)}>수정</button>
      <button
        onClick={(e) =>
          deletePost(item._id)
            .then(() => {
              (e.target as HTMLButtonElement).parentElement?.classList.add('hide');
            })
            .then(() => router.refresh())
        }
      >
        삭제
      </button>
    </div>
  );
}

async function deletePost(_id: string) {
  const res = await fetch('http://localhost:3000/api/post/delete', {
    method: 'delete',
    body: JSON.stringify({ _id }),
  });

  return res;
}
