import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button className="text-white px-3 py-2 font-medium flex items-center bg-zinc-900 opacity-32 rounded-full hover:bg-zinc-400 cursor-pointer text-sm text-[.55rem] lg:text-[.80rem]" onClick={() => logout({ returnTo: window.location.origin })}>
      <div className=""></div>
      Log Out
    </button>
  );
};

export default LogoutButton;
