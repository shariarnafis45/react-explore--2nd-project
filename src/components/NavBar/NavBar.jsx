import { Menu, X } from "lucide-react";
import React, { useState } from "react";
const navData = {
  navItems: [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "About",
      path: "/about",
    },
    {
      id: 3,
      name: "Services",
      path: "/services",
    },
    {
      id: 4,
      name: "Blog",
      path: "/blog",
    },
    {
      id: 5,
      name: "Contact",
      path: "/contact",
    },
  ],
};
const NavBar = () => {
  const [open, setOpen] = useState(false);
  const routes = navData.navItems.map((route) => (
    <li
      key={route.id}
      className=" duration-300 hover:-translate-y-1.5 hover:font-bold hover:text-xl"
    >
      <a href={route.path}>{route.name}</a>
    </li>
  ));
  return (
    <nav className="pt-5 flex justify-between items-center w-11/12 mx-auto">
      <div  className="flex items-center gap-2">
        <div onClick={() => setOpen(!open)} className="btn btn-ghost rounded-lg">
          {open ? (
            <X className="md:hidden"></X>
          ) : (
            <Menu className="md:hidden"></Menu>
          )}
        </div>
        <ul
          className={`md:hidden absolute py-4 px-7 rounded-md shadow-lg shadow-white/5 bg-black/30 duration-1000 ${open ? "top-18" : "-top-50"}`}
        >
          {routes}
        </ul>

        <h2 className="btn btn-ghost">
          <a href="/">Logo</a>
        </h2>
      </div>
      <ul className="hidden md:flex gap-4 justify-center">{routes}</ul>
      <div>
        <button className="btn btn-primary">Sign In</button>
      </div>
    </nav>
  );
};

export default NavBar;
