"use client";

import { useFetch } from "@/customHook/useFetch";
import Layout from "../Layout";
import ProfileBox from "./ProfileBox";
import { PostCardType } from "../home/Home";

interface ProfileDataType {
  id: number;
  nickName: string;
  imageUrl: string;
  intro: string;
  posts: PostCardType;
}

export default function Profile({ id }: { id: string }) {
  const { data, isLoading, error } = useFetch({
    fetchUrl: `/profile/${id}`,
  });
  return (
    <Layout>
      <div>
        <ProfileBox
          imageUrl={""}
          nickName={"@dumb_Lim"}
          id={0}
          introContents={""}
        />
      </div>
    </Layout>
  );
}
