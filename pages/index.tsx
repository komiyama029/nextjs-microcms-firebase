import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { client } from "@/libs/client";
import { Article, ArticleList } from "@/types";
import { Form } from "@/components/Form";
import { useAuthContext } from "@/context/AuthContext";
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "next/router";

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.getList<Article>({
    endpoint: "article",
    queries: {
      fields: ["id", "private", "title"],
    },
  });

  return {
    props: { data },
  };
};

type Props = {
  data: ArticleList;
};

const Index: NextPage<Props> = ({ data }) => {
  const router = useRouter();
  const auth = getAuth();
  const { contents } = data;
  const { user } = useAuthContext();

  const logout = async () => {
    await signOut(auth);
    await router.push("/login");
  };

  return (
    <div>
      {!user ? (
        <div>
          <div>
            <Link href="/login">ログイン</Link>
          </div>
          <div>
            <Link href="/signup">新規登録</Link>
          </div>
        </div>
      ) : (
        <button onClick={logout} type="button">
          ログアウト
        </button>
      )}

      <ul>
        {contents.map((content) => (
          <li key={content.id}>
            <Link href={`/${content.private ? "private" : "public"}/${content.id}`}>
              <a>{content.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Index;
