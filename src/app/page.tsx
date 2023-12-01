"use client";

import PostCard from "@/components/home/PostCard";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        padding: "20px 30px",
      }}
    >
      <PostCard />
    </div>
  );
}
