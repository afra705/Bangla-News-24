"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import React from "react";

const SignUpPage = () => {
  const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries()) as {name: string, email:string, image:string, password:string};

    const { data, error } = await authClient.signUp.email({
      ...user,
      callbackURL: "/",
    });

    // if (data) {
    //   console.log(data);
    //   redirect("");
    // }

    if (error) {
      console.log(error);
    }
  };
 const handleGoggleSignIn = async()=>{
       const data = await authClient.signIn.social({
    provider: "google",
  });
 }
 const handleGithub = async () => {
    const data = await authClient.signIn.social({
        provider: "github"
    })
}


  return (
    <>
    <div className="flex flex-col items-center justify-center mt-5">
      <h2 className="text-2xl font-bold text-red-700">সাইন আপ</h2>
      <form onSubmit={onSubmit}>
        <fieldset className="fieldset   rounded-box w-md">
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

          <label className="label">ইমেইল</label>
          <input
            name="email"
            type="email"
            className="input w-md"
            placeholder="Email"
          />

          <label className="label">পাসওয়ার্ড</label>
          <input
            name="password"
            type="password"
            className="input w-md"
            placeholder="Password"
          />

          <button type="submit" className="btn text-white bg-red-700 mt-4 ">
            সাইন আপ করুন
          </button>
        </fieldset>
      </form>

    </div>
          
          <div className="flex flex-col gap-3 w-full max-w-sm mx-auto">
  <Button
    onClick={handleGoggleSignIn}
    className="w-full h-12 rounded-xl bg-white border border-gray-300 text-gray-800 font-semibold shadow-sm hover:bg-gray-50 transition"
  >
    <span className="text-lg">G</span>
    Sign in with Google
  </Button>

  <Button
    onClick={handleGithub}
    className="w-full h-12 rounded-xl bg-gray-900 text-white font-semibold shadow-sm hover:bg-gray-800 transition"
  >
    <span className="text-lg">●</span>
    Sign in with GitHub
  </Button>
</div>
        </>
  );
};

export default SignUpPage;