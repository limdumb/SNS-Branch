"use client";
import { useFetch } from "@/customHook/useFetch";
import styles from "./style/home.module.css";
import PostCard from "@/components/home/PostCard";
import Spinner from "@/components/Spinner";
import Layout from "../Layout";

export interface CommentType {
  user: {
    id: number;
    nickName: string;
    imageUrl: string;
  };
  comments: string;
}

export interface PostCardType {
  user: {
    id: number;
    nickName: string;
    imageUrl: string;
  };
  contents: string;
  likes: number;
  comments: CommentType[];
}

export default function Home() {
  const { data, isLoading, error } = useFetch<PostCardType[]>({
    fetchUrl: "/posts",
  });

  return (
    <Layout>
      <div className={styles.Home_Container}>
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
