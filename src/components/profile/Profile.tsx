import { useFetch } from "@/customHook/useFetch";
import Layout from "../Layout";
import ProfileBox from "./ProfileBox";
import { useRouter } from "next/router";

export default function Profile() {
  const router = useRouter();
  const { data, isLoading, error } = useFetch({
    fetchUrl: `/profile/${router.query.id}`,
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
