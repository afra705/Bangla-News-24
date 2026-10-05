"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Link from "next/link";
import { useState } from "react";

const ProfilePage = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newUserData = Object.fromEntries(formData.entries()) as {
      name: string;
      email: string;
    };

    await authClient.updateUser({
      ...newUserData,
    });
  };

  return (
    <div className="mt-10">
      <div className="flex flex-col items-center gap-2 ">
        <Link href="/profile">
          <div className="avatar">
            <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-2">
              <img alt="profile" src={user?.image || "/default-avatar.png"} />
            </div>
          </div>
        </Link>

        <h2>{user?.name}</h2>
        <p>{user?.email}</p>
      </div>
      <div className="flex flex-col items-center justify-center mt-10">
        <div className="flex justify-center mb-4">
          <Button onClick={handleShow} className="red">
            Edit your profile
          </Button>
        </div>
       {show && <form onSubmit={onSubmit}>
          <fieldset className="fieldset rounded-box w-md">
            <label className="label">নাম</label>

            <input
              name="name"
              type="text"
              className="input w-md"
              placeholder="Name"
            />

            <label className="label">ImageURL</label>

            <input
              name="image"
              type="url"
              className="input w-md"
              placeholder="Image"
            />

            <button type="submit" className="btn text-white bg-red-700 mt-4">
              প্রোফাইল আপডেট করুন
            </button>
          </fieldset>
        </form>}
      </div>
    </div>
  );
};

export default ProfilePage;
