'use client';

import { useRouter } from 'next/navigation';

export default function ModifyButton(props: { id: string }) {
  const router = useRouter();
  const handlePost = async () => {
    const api = await writePost(props.id);
    const status = api.status;

    if (status === 200) {
      router.push('/list');
    }
  };

  return (
    <>
      <button onClick={() => handlePost()}>수정</button> <button>취소</button>
    </>
  );
}

async function writePost(_id: string) {
  const title = (document.getElementById('title') as HTMLInputElement).value;
  const subtitle = (document.getElementById('subtitle') as HTMLInputElement).value;
  const content = (document.getElementById('content') as HTMLInputElement).value;

  const res = await fetch('http://localhost:3000/api/post/modify', {
    method: 'put',
    body: JSON.stringify({ _id, title, subtitle, content }),
  });

  return res;
}
