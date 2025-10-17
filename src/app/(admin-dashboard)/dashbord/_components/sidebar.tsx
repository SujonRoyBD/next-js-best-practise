"use client"
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SidebarData } from "./dashboard-sidebar-menu";

const Sidebar = () => {
  const pathName = usePathname();
  return (
    <div className="h-screen w-[200px] border-2 border-black">
      {SidebarData?.map((data) => {
        const Icon = data?.icon;
        return (
          <div key={data?.id}>
            <Link
              href={data.href}
              className={`flex items-center gap-2 text-white text-base leading-normal rounded-[12px] my-2 px-2 py-1 ${
                pathName === data?.href ? "bg-green-500 font-bold" : "bg-amber-400 font-semibold"
              }`}
            >
              <Icon />
              {data?.name}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;