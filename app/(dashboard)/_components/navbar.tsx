import { NavbarRoutes } from "@/components/navbar-routes";

import { MobileSidebar } from "./mobile-sidebar";

export const Navbar = () => {
  return (
    <div className="p-4 border-b rounded-b-lg rounded-t-none h-full flex items-center bg-sky-500 shadow-sm">
      <MobileSidebar />
      <NavbarRoutes />
    </div>
  );
};
