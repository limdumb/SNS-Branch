"use client";

import { useFetch } from "@/customHook/useFetch";
import Layout from "../Layout";
import style from "./style/friends.module.css";
import Spinner from "../Spinner";
import FrinedRequestBox from "./FriendRequestBox";

export interface FriendsDataType {
  id: number;
  nickName: string;
  imageUrl: string;
  friendStatus: boolean;
}

export default function Friends() {
  const { data, error, isLoading } = useFetch<FriendsDataType[]>({
    fetchUrl: "/friend",
  });

  return (
    <Layout>
      <div className={style.Friend_Container}>
        <div className={style.Friend_Request_Count_Box}>
          <span>친구요청 {data && data.length}건</span>
        </div>
        {!isLoading ? (
          <div className={style.Friend_Request_Wrapper}>
            {data &&
              data.map((el) => {
                return (
                  <FrinedRequestBox
                    key={el.id}
                    id={el.id}
                    nickName={el.nickName}
                    imageUrl={el.imageUrl}
                    friendStatus={el.friendStatus}
                  />
                );
              })}
          </div>
        ) : (
          <Spinner />
        )}
      </div>
    </Layout>
  );
}
