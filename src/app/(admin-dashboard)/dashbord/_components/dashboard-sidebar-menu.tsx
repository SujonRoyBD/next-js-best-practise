
import { LayoutDashboard, LogOut,  PackageSearch, Settings } from "lucide-react";

export interface SidebarDataType {
  id: number;
  name: string;
  href: string;
  icon: React.ElementType;
}

export const SidebarData: SidebarDataType[] = [
  {
    id: 1,
    name: "Dashbord",
    href: "/dashbord",
    icon: LayoutDashboard,
  },
  {
    id: 2,
    name: "Oder",
    href: "/order",
    icon: PackageSearch,
  },
  {
    id: 3,
    name: "Setting",
    href: "/setting",
    icon: Settings,
  },
  {
    id: 4,
    name: "Log-out",
    href: "/logout",
    icon: LogOut,
  },
 

]