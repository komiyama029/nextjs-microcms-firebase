type Props = {
  onSubmit: () => void;
  onChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Form = (props: Props) => {
  const { onSubmit, onChangeEmail, onChangePassword } = props;
  return (
    <div>
      <div>
        <input onChange={onChangeEmail} type="email" placeholder="メールアドレス" />
      </div>
      <div>
        <input onChange={onChangePassword} type="password" placeholder="パスワード" />
      </div>
      <div>
        <button onClick={onSubmit} type="button">
          送信
        </button>
      </div>
    </div>
  );
};
