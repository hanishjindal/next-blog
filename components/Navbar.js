import React from "react";
import Link from "next/link";

const Navbar = ({ name, login }) => {
  return (
    <div className="navbar">
      <div className="blog_name">
        <Link href="/">
          <a>{name}</a>
        </Link>
      </div>
      <ul>
        <Link href="/">
          <li>
            <a>Home</a>
          </li>
        </Link>
        <Link href="/blog">
          <li>
            <a>Blog</a>
          </li>
        </Link>
        {!login ? (
          <Link href="/login">
            <li>
              <a>Login</a>
            </li>
          </Link>
        ) : (
          <Link href="/dashboard">
            <li>
              <a>Dashboard</a>
            </li>
          </Link>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
