"use client";
import { useFetch } from "@/customHook/useFetch";
import styles from "./style/commercial.module.css";
import Spinner from "@/components/Spinner";
import Layout from "../Layout";
import PostCard from "../home/PostCard";

export interface CommentType {
  user: {
    id: number;
    nickName: string;
    imageUrl: string;
  };
  comments: string;
}

export interface CommercialCardType {
  user: {
    id: number;
    nickName: string;
    imageUrl: string;
  };
  contents: string;
  likes: number;
  comments: CommentType[];
}

export default function Commercial() {
  const { data, isLoading, error } = useFetch<CommercialCardType[]>({
    fetchUrl: "/commercial",
  });

  return (
    <Layout>
      <div className={styles.Commercial_Container}>
        {!isLoading ? (
          data &&
          data.map((el, index) => {
            return (
              <PostCard
                key={index}
                user={{
                  id: el.user.id,
                  nickName: el.user.nickName,
                  imageUrl: el.user.imageUrl,
                }}
                contents={el.contents}
                likes={el.likes}
                comments={el.comments}
              />
            );
          })
        ) : (
          <Spinner />
        )}
      </div>
    </Layout>
  );
}
