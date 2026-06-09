import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <div className="flex h-screen w-full bg-background-light overflow-hidden">
      <div className="py-4 pl-2 h-full">
        <Sidebar />
      </div>

      <main className="flex-1 overflow-y-auto py-5 pr-5 pl-10">
        <Outlet />
      </main>
    </div>
  );
}
