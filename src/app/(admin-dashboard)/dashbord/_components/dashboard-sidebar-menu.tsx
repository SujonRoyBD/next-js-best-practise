export interface SidebarDataType {
  id: number;
  name: string;
  href: string;
  icon: string;
}

export const SidebarData: SidebarDataType[] = [
  {
    id: 1,
    name: "Dashboard",
    href: "/dashbord",
    icon: "/assets/images/img4.jpg",
  },
  {
    id: 2,
    name: "Order",
    href: "/order",
    icon: "/assets/images/img4.jpg",
  },
  {
    id: 3,
    name: "Setting",
    href: "/setting",
    icon: "/assets/images/img4.jpg",
  },
  {
    id: 4,
    name: "Log Out",
    href: "/logout",
    icon: "/assets/images/img4.jpg",
  },
];
