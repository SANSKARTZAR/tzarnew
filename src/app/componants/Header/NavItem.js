"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavItem = ({ navItem = {} }) => {
  const pathname = usePathname(); // ✅ Correct hook for App Router
  const { name, href, subNavItems = [] } = navItem;

  const subHref = subNavItems.map((item) => item.href);
  const current = pathname === href || subHref.includes(pathname);

  return (
    <li
      className={`dropdown${current ? " current" : ""}`}
      style={{
        position: "relative",
        listStyle: "none",
        margin: "0 10px", // reduced spacing between menu items
      }}
    >
      <Link
        href={href}
        style={{
          color: "#fff",
          textDecoration: "none",
          fontSize: "14px",
          fontWeight: "500",
          letterSpacing: "0.3px",
          transition: "color 0.3s ease",
          whiteSpace: "nowrap",
        }}
      >
        {name}
      </Link>

      {subNavItems.length > 0 && (
        <ul
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            backgroundColor: "#0D2C6B",
            listStyle: "none",
            padding: "8px 0",
            margin: 0,
            minWidth: "180px",
            display: "none",
          }}
        >
          {subNavItems.map((subItem) => (
            <li
              key={subItem.id}
              style={{ margin: 0, padding: "6px 14px" }}
              className={subItem.subItems?.length ? "dropdown" : ""}
            >
              <Link
                href={subItem.href}
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: "13px",
                  display: "block",
                }}
              >
                {subItem.name}
              </Link>

              {subItem.subItems?.length > 0 && (
                <ul
                  style={{
                    listStyle: "none",
                    margin: "6px 0 0 15px",
                    padding: 0,
                  }}
                >
                  {subItem.subItems.map((item) => (
                    <li key={item.id}>
                      <Link
                        href={item.href}
                        style={{
                          color: "#fff",
                          textDecoration: "none",
                          fontSize: "13px",
                        }}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default NavItem;
