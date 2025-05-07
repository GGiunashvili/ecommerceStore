import { useAuth } from "../components/auth/authContext"; // useAuth import

export default function Profile() {
  const { currentUser } = useAuth(); // get context values

  return (
    <div className="w-full max-w-[1200px] px-[16px] md:px-[32px] mx-auto grid grid-cols-12 gap-x-[20px] gap-y-[120px] pt-[20px] mb-[50px] md:mb-[100px]">
      <div className="col-span-12">
        <h1 className="text-2xl font-bold mb-4">User Profile</h1>
        <p className="text-lg">Welcome to your profile page!</p>
        <p className="text-black">hello {currentUser?.username}</p>
      </div>
    </div>
  );
}
