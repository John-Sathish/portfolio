import React from "react";

function Header() {
  const nav = [
    {
      id: 0,
      name: "HOME",
    },
    {
      id: 1,
      name: "EXPERIENCE",
    },
    {
      id: 2,
      name: "PROJECTS",
    },
    {
      id: 3,
      name: "SKILLS",
    },
    {
      id: 4,
      name: "CONTACTS",
    },
  ];
  return (
    <div className="flex items-center fixed w-full justify-between border-b-[1px] bg-white ">
      <div className="w-[90px] h-[90px]">
        <img src="/logo.jpg" />
      </div>

      <div className="hidden md:flex gap-14 ">
        {nav.map((items) => (
          <div className="cursor-pointer hover:bg-sky-700 text-black">
            {items.name}
          </div>
        ))}
      </div>

      <div className="w-[90px] h-[90px] bg-red-500 flex justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-10 h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
          />
        </svg>
      </div>
    </div>
  );
}

export default Header;
