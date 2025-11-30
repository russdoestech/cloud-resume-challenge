import { useState, useEffect } from 'react'
import Header from 'components/Header'
import { Outlet, NavLink, useLocation } from 'react-router'
import 'css/default.css'

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    // derive a simple name for the page
    const page =
      location.pathname === "/" ? "home" : location.pathname.replace("/", "");

    // set it on the body tag
    document.body.setAttribute("location", page);

    // optional cleanup
    return () => {
      document.body.removeAttribute("location");
    };
  }, [location]);

  return (
    <>
      <Header></Header>
      <div className="content_wrap">
        <div className="content">
          <article>
            <Outlet></Outlet>
          </article>
        </div>
      </div>
    </>
  )
}


