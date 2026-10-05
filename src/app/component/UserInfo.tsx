
"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";

const UserInfo = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const handleSignout = async () => {
    await authClient.signOut();
    window.location.href = "/";
  };

  if (isPending) {
    return null;
  }

  return (
    <div className="absolute right-4 top-2 flex items-center">
      {user ? (
        <div className="flex gap-4 items-center justify-center">
          <div className="flex flex-col items-center gap-2">
          <Link href='/profile'> 
              <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
                <img
                  alt="profile"
                  src={user.image || "/default-avatar.png"}
                />
              </div>
            </div>
          </Link>

            <h2>{user.name}</h2>
          </div>

          <button
            onClick={handleSignout}
            type="button"
            className="btn rounded-2xl text-white bg-red-700 mt-4"
          >
            সাইন out
          </button>
        </div>
      ) : (
        <div className="ml-auto flex gap-2 items-center">
          <Link href="/signin">
            <button className="text-gray-500 text-[16px]">
              সাইন ইন
            </button>
          </Link>

          <Link href="/signup">
            <button className="btn btn-active bg-red-700 text-white">
              সাইন আপ
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
