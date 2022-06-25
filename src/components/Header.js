import React from "react";

const Header = () => {
  return (
    <nav className=" sticky top-0 flex  w-screen h-16 bg-blue-200  shadow-xl rounded-bl-3xl rounded-br-3xl">
      <div className="flex-1 flex justify-center mr-auto">
        <div className=" p-2 mx-2 text-4xl text-blue-500 font-extrabold">
          Contact Manager
        </div>
      </div>
    </nav>
  );
};

export default Header;
