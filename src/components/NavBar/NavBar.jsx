import React from "react";
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
  return (
    <nav className="pt-5">
      <ul className="flex gap-4 justify-center">
        {navData.navItems.map((route) => (
          <li>
            <a href={route.path}>{route.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
