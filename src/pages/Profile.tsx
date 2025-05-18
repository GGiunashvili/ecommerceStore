"use client";

import BasketUpdater from "../components/BasketUpdater";

import { useAuth } from "../components/auth/authContext";
import LogInForm from "../components/auth/LogInForm";
import ClearBasketButton from "../components/ClearBasketButton";
const UserProfile = () => {
  const { currentUser } = useAuth();

  return (
    <div className="w-full max-w-[1200px] px-[16px] md:px-[32px] mx-auto grid grid-cols-12 gap-x-[20px] gap-y-[120px] pt-[20px] mb-[50px] md:mb-[100px]">
      <div className="col-span-12 text-center">
        {!currentUser ? (
          <>
            <p className="text-center py-10">გაიარეთ ავტორიზაცია</p>
            <LogInForm />
          </>
        ) : (
          <>
            <h2>მომხმარებელი: {currentUser.username}</h2>
            <p>ტელეფონის ნომერი: {currentUser.phone_number}</p>
            <BasketUpdater />
            <ClearBasketButton />
          </>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
