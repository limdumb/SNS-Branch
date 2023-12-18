import Profile from "@/components/profile/Profile";

export default function ProfilePage({ params }: { params: { id: string } }) {
  return <Profile id={params.id} />;
}
