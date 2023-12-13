import Layout from "../Layout";
import ProfileBox from "./ProfileBox";

export default function Profile() {
  return (
    <Layout>
      <div>
        <ProfileBox imageUrl={""} nickName={"@dumb_Lim"} id={0} introContents={""} />
      </div>
    </Layout>
  );
}
