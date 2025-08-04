"use client";
import { signIn, signOut, useSession } from "next-auth/react";
const Appbar = () => {
  const session = useSession();
  return (
    <div className="flex p-4">
      Appbar
      <div className="px-4">
        <button
          className="px-4"
          onClick={() => {
            signIn();
          }}
        >
          Signin
        </button>
        <button
          className="px-4"
          onClick={() => {
            signOut();
          }}
        >
          logout
        </button>
        {JSON.stringify(session.data?.user)}
      </div>
    </div>
  );
};

export default Appbar;
