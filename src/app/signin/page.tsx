"use client";

import { authClient, signIn } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const SigninPage = () => {
  
  const router = useRouter();

  const onSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    console.log("EMAIL:", email);
    console.log("PASSWORD:", password);

    const { data, error } = await signIn.email({
      email,
      password,
      callbackURL: "/",
    });

    console.log("LOGIN DATA:", data);
    console.log("LOGIN ERROR:", error);


    if(data){
        toast.success('Sign in succesfully!')
    }
    if (error) {
      toast.error(error.message as string)
      console.log("LOGIN FAILED:", error);
      return;
    }

    router.push("/");
    router.refresh();
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
    <div className="min-h-[70vh] flex items-center justify-center">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-md bg-base-200 p-6 rounded-2xl"
      >
        <h1 className="text-3xl font-bold text-red-700 text-center mb-6">
          সাইন ইন
        </h1>

        <fieldset className="fieldset mb-4">
          <label className="label">ইমেইল</label>

          <input
            name="email"
            type="email"
            className="input input-bordered w-full"
            placeholder="আপনার ইমেইল লিখুন"
            required
          />
        </fieldset>

        <fieldset className="fieldset mb-4">
          <label className="label">পাসওয়ার্ড</label>

          <input
            name="password"
            type="password"
            className="input input-bordered w-full"
            placeholder="পাসওয়ার্ড লিখুন"
            required
          />
        </fieldset>

        <button
          type="submit"
          className="btn bg-red-700 text-white w-full"
        >
          সাইন ইন করুন
        </button>
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

export default SigninPage;