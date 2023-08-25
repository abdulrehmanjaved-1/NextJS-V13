import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/server";

export default function Home() {
  return (
    <div className="flex justify-center items-center text-center min-h-screen">
      <h1 className="font-bold text-4xl text-black-700">
        Welcome to Login screen
      </h1>
      <div className="mt-5">
      <RegisterLink className='bg-blue-700 p-3 rounded-lg m-4'>Sign up</RegisterLink>
      <LoginLink className='bg-blue-700 p-3 rounded-lg m-4'>Login</LoginLink>
      </div>
    </div>
  );
}
