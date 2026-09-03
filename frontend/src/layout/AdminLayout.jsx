import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  CreditCard,
  Users,
  Settings,
  Flame,
  LogOut,
} from "lucide-react";

const AdminLayout = () => {
  const menuItems = [
    {
      name: "Overview",
      path: "overview",
      icon: LayoutDashboard,
    },
    {
      name: "Products",
      path: "products",
      icon: Package,
    },
    {
      name: "Payments",
      path: "payments",
      icon: CreditCard,
    },
    {
      name: "Users",
      path: "users",
      icon: Users,
    },
    {
      name: "Settings",
      path: "settings",
      icon: Settings,
    },
  ];

  return (
    <div className="flex min-h-screen bg-[#f8f6f1] text-[#292622]">

      {/* Sidebar */}
      <aside className="fixed left-0 top-0 flex h-screen w-64 flex-col border-r border-[#e7e1d7] bg-[#fffdf9]">

        {/* Logo */}
        <div className="flex items-center gap-3 border-b border-[#eee8df] px-6 py-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#292622] text-white">
            <Flame size={20} />
          </div>

          <div>
            <h1 className="text-lg font-semibold tracking-wide">
              Merlit
            </h1>
            <p className="text-xs text-gray-500">
              Candle Studio
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 px-4 py-6">
          <p className="mb-3 px-3 text-[11px] font-semibold uppercase tracking-widest text-gray-400">
            Management
          </p>

          <nav className="flex flex-col gap-1">
            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                      isActive
                        ? "bg-[#292622] text-white shadow-sm"
                        : "text-gray-600 hover:bg-[#f3efe8] hover:text-[#292622]"
                    }`
                  }
                >
                  <Icon size={18} strokeWidth={1.8} />
                  {item.name}
                </NavLink>
              );
            })}
          </nav>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#eee8df] p-4">
          <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm text-gray-600 transition hover:bg-red-50 hover:text-red-600">
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main area */}
      <div className="ml-64 flex min-h-screen flex-1 flex-col">

        {/* Header */}
        <header className="sticky top-0 z-10 flex h-20 items-center justify-between border-b border-[#e7e1d7] bg-[#fffdf9]/95 px-8 backdrop-blur">

          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-gray-400">
              Administration
            </p>

            <h2 className="mt-1 text-xl font-semibold">
              Welcome back
            </h2>
          </div>

          {/* Admin profile */}
          <div className="flex items-center gap-3">
            <div className="hidden text-right sm:block">
              <p className="text-sm font-medium">
                Admin
              </p>
              <p className="text-xs text-gray-500">
                Store Manager
              </p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d7b98e] text-sm font-semibold text-[#292622]">
              A
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-8">
          <Outlet />
        </main>

      </div>
    </div>
  );
};

export default AdminLayout;