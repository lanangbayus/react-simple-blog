import { NavLink, Outlet } from "react-router-dom";
import "../styles/index.css";

function RootLayout() {
  return (
    <>
      <nav>
        <NavLink
          className={({ isActive, isPending }) => (isActive ? "active" : isPending ? "pending" : "")}
          style={{ marginRight: "5px" }}
          to="/">
          Home
        </NavLink>
        |
        <NavLink
          className={({ isActive, isPending }) => (isActive ? "active" : isPending ? "pending" : "")}
          style={{ marginRight: "5px", marginLeft: "5px" }}
          to="/blog">
          Blog
        </NavLink>
        |
        <NavLink
          className={({ isActive, isPending }) => (isActive ? "active" : isPending ? "pending" : "")}
          style={{ marginLeft: "5px" }}
          to="/about">
          About
        </NavLink>
        <p />
      </nav>
      <Outlet />
    </>
  );
}

export default RootLayout;
