import { Form } from "@/components/Form";
import { app } from "@/libs/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Login: NextPage = () => {
  const router = useRouter();
  const auth = getAuth(app);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 送信
  const onSubmit = async () => {
    await signInWithEmailAndPassword(auth, email, password);
    router.push("/");
  };
  // email設定
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };
  // password設定
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  return (
    <div>
      <h1>ログイン</h1>
      <Form onSubmit={onSubmit} onChangeEmail={onChangeEmail} onChangePassword={onChangePassword} />
    </div>
  );
};

export default Login;
