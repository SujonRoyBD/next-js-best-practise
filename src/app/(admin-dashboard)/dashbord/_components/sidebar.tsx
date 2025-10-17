"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SidebarData } from "./dashboard-sidebar-menu";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // ✅ lucide-react আইকন ব্যবহার করা হয়েছে

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname();

  return (
    <>
      {/* 🔹 Mobile Navbar (Hamburger Menu) */}
      <div className="md:hidden flex items-center justify-between bg-gray-800 text-white px-4 py-3">
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* 🔹 Sidebar (Desktop + Mobile Drawer) */}
      <div
        className={`fixed md:static top-0 left-0 h-full md:h-screen bg-gray-900 text-white w-[220px] p-4 transition-transform duration-300 z-50
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        {/* Sidebar Header */}
        <h2 className="text-2xl font-bold mb-6 hidden md:block">
          My Dashboard
        </h2>

        {/* Sidebar Menu Items */}
        {SidebarData.map((data) => (
          <Link
            key={data.id}
            href={data.href}
            onClick={() => setIsOpen(false)} // ✅ ছোট স্ক্রিনে ক্লিক করলে sidebar বন্ধ হবে
            className={`flex items-center gap-3 px-3 py-2 rounded-lg my-2 transition-all duration-200 ${
              pathName === data.href
                ? "bg-green-600 font-semibold"
                : "hover:bg-gray-700"
            }`}
          >
            <Image
              src={data.icon}
              alt={data.name}
              width={24}
              height={24}
              className="rounded"
            />
            <span>{data.name}</span>
          </Link>
        ))}
      </div>

      {/* 🔹 Overlay for mobile view */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        ></div>
      )}
    </>
  );
};

export default Sidebar;
