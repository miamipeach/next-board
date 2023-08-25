'use client';
import { useRouter } from 'next/navigation';

export default function WriteBtn() {
  const router = useRouter();

  const handlePost = async () => {
    const title = (document.getElementById('title') as HTMLInputElement).value;
    const subtitle = (document.getElementById('subtitle') as HTMLInputElement).value;
    const content = (document.getElementById('content') as HTMLInputElement).value;

    await fetch('http://localhost:3000/api/post/new', {
      method: 'POST',
      body: JSON.stringify({ title, subtitle, content }),
    }).then(() => {
      router.push(`/list?${Math.random().toString()}`);
    });
  };

  return <button onClick={() => handlePost()}>버튼</button>;
}
