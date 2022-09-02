import Image from "next/image";
import { FC } from "react";
import { ArticleListDetail } from "@/types";

type Props = {
  data: ArticleListDetail;
};

export const Article: FC<Props> = ({ data }) => {
  const { thumbnail, title, body, publishedAt } = data;

  return (
    <>
      {thumbnail !== undefined && (
        <Image
          src={thumbnail.url}
          width={thumbnail.width}
          height={thumbnail.height}
          alt=""
        />
      )}
      <h1>{title}</h1>
      <p>{publishedAt}</p>
      <div dangerouslySetInnerHTML={{ __html: body || "" }} />
    </>
  );
};
