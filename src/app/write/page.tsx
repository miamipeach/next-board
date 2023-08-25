import WriteBtn from '@/app/write/components/WriteBtn';

export default function Write() {
  return (
    <div className={'p-20'}>
      <h4>글작성</h4>

      <input name={'title'} type="text" id={'title'} />
      <input name={'subtitle'} type="text" id={'subtitle'} />
      <input name={'content'} type="text" id={'content'} />
      <WriteBtn />
    </div>
  );
}
