import { Form } from "@/components/Form";
import { app } from "@/libs/firebase";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Signup: NextPage = () => {
  const router = useRouter();
  const auth = getAuth(app);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 送信
  const onSubmit = async () => {
    await createUserWithEmailAndPassword(auth, email, password);
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
      <h1>サインアップ</h1>
      <Form onSubmit={onSubmit} onChangeEmail={onChangeEmail} onChangePassword={onChangePassword} />
    </div>
  );
};

export default Signup;
