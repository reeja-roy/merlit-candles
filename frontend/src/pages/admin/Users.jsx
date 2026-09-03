import React, { useState } from "react";
import {
  Search,
  Filter,
  UserPlus,
  MoreVertical,
  ShieldCheck,
  User,
  Users as UsersIcon,
  UserCheck,
  UserX,
} from "lucide-react";

const Users = () => {
  const [search, setSearch] = useState("");

  const users = [
    {
      id: "USR-001",
      name: "Ananya Menon",
      email: "ananya@example.com",
      phone: "+91 98765 43210",
      role: "User",
      status: "Active",
      joined: "03 Sep 2026",
    },
    {
      id: "USR-002",
      name: "Rahul Kumar",
      email: "rahul@example.com",
      phone: "+91 98765 12345",
      role: "User",
      status: "Active",
      joined: "02 Sep 2026",
    },
    {
      id: "USR-003",
      name: "Meera Joseph",
      email: "meera@example.com",
      phone: "+91 91234 56789",
      role: "User",
      status: "Active",
      joined: "01 Sep 2026",
    },
    {
      id: "USR-004",
      name: "Arjun Nair",
      email: "arjun@example.com",
      phone: "+91 99887 66554",
      role: "User",
      status: "Inactive",
      joined: "30 Aug 2026",
    },
    {
      id: "ADM-001",
      name: "Admin",
      email: "admin@merlitcandles.com",
      phone: "+91 90000 00000",
      role: "Admin",
      status: "Active",
      joined: "20 Aug 2026",
    },
  ];

  const filteredUsers = users.filter((user) =>
    `${user.name} ${user.email}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#f8f6f1] p-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-medium text-[#a78b6d]">
            User Management
          </p>

          <h1 className="mt-1 text-2xl font-semibold text-[#292622]">
            Users
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Manage customers and administrator accounts.
          </p>
        </div>

        <button className="flex items-center justify-center gap-2 rounded-lg bg-[#292622] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#403b35]">
          <UserPlus size={17} />
          Add User
        </button>
      </div>

      {/* Stats */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Total Users"
          value="1,248"
          description="+8.4% this month"
          icon={UsersIcon}
          iconStyle="bg-[#f5eee5] text-[#a78b6d]"
        />

        <StatCard
          title="Active Users"
          value="1,186"
          description="95% of total users"
          icon={UserCheck}
          iconStyle="bg-emerald-50 text-emerald-600"
        />

        <StatCard
          title="Inactive Users"
          value="62"
          description="Requires attention"
          icon={UserX}
          iconStyle="bg-red-50 text-red-600"
        />

        <StatCard
          title="Administrators"
          value="4"
          description="Admin accounts"
          icon={ShieldCheck}
          iconStyle="bg-purple-50 text-purple-600"
        />
      </div>

      {/* Search + Filters */}
      <div className="mt-6 rounded-xl border border-[#ebe6de] bg-white p-4">
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          {/* Search */}
          <div className="relative w-full lg:max-w-sm">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name or email..."
              className="w-full rounded-lg border border-gray-200 bg-[#fcfbf9] py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-[#c8aa86]"
            />
          </div>

          <div className="flex gap-3">
            <select className="rounded-lg border border-gray-200 bg-[#fcfbf9] px-4 py-2.5 text-sm text-gray-600 outline-none">
              <option>All Roles</option>
              <option>User</option>
              <option>Admin</option>
            </select>

            <select className="hidden rounded-lg border border-gray-200 bg-[#fcfbf9] px-4 py-2.5 text-sm text-gray-600 outline-none sm:block">
              <option>All Status</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>

            <button className="flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-600 transition hover:bg-gray-50">
              <Filter size={16} />
              Filter
            </button>
          </div>
        </div>
      </div>

      {/* Users Table */}
      <div className="mt-4 overflow-hidden rounded-xl border border-[#ebe6de] bg-white">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[950px] text-left">
            <thead className="border-b border-[#ebe6de] bg-[#fcfbf9]">
              <tr>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
                  User
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Contact
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Role
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Status
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Joined
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[#f0ece6]">
              {filteredUsers.map((user) => (
                <tr
                  key={user.id}
                  className="transition hover:bg-[#fcfbf9]"
                >
                  {/* User */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f5eee5] text-sm font-semibold text-[#8d7255]">
                        {user.name.charAt(0)}
                      </div>

                      <div>
                        <p className="text-sm font-medium text-[#292622]">
                          {user.name}
                        </p>

                        <p className="mt-0.5 text-xs text-gray-400">
                          {user.id}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Contact */}
                  <td className="px-6 py-4">
                    <p className="text-sm text-gray-700">
                      {user.email}
                    </p>

                    <p className="mt-1 text-xs text-gray-400">
                      {user.phone}
                    </p>
                  </td>

                  {/* Role */}
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${
                        user.role === "Admin"
                          ? "bg-purple-50 text-purple-700"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {user.role === "Admin" ? (
                        <ShieldCheck size={13} />
                      ) : (
                        <User size={13} />
                      )}

                      {user.role}
                    </span>
                  </td>

                  {/* Status */}
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
                        user.status === "Active"
                          ? "bg-emerald-50 text-emerald-700"
                          : "bg-red-50 text-red-600"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>

                  {/* Joined */}
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {user.joined}
                  </td>

                  {/* Action */}
                  <td className="px-6 py-4">
                    <button className="rounded-lg p-2 text-gray-500 transition hover:bg-gray-100 hover:text-[#292622]">
                      <MoreVertical size={18} />
                    </button>
                  </td>
                </tr>
              ))}

              {filteredUsers.length === 0 && (
                <tr>
                  <td
                    colSpan="6"
                    className="px-6 py-12 text-center text-sm text-gray-500"
                  >
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between border-t border-[#ebe6de] px-6 py-4">
          <p className="text-sm text-gray-500">
            Showing{" "}
            <span className="font-medium text-gray-700">
              {filteredUsers.length}
            </span>{" "}
            users
          </p>

          <div className="flex gap-2">
            <button className="rounded-lg border border-gray-200 px-3 py-1.5 text-sm text-gray-400">
              Previous
            </button>

            <button className="rounded-lg bg-[#292622] px-3 py-1.5 text-sm text-white">
              1
            </button>

            <button className="rounded-lg border border-gray-200 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50">
              2
            </button>

            <button className="rounded-lg border border-gray-200 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50">
              3
            </button>

            <button className="rounded-lg border border-gray-200 px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-50">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/* -----------------------------
   STAT CARD
----------------------------- */

const StatCard = ({
  title,
  value,
  description,
  icon: Icon,
  iconStyle,
}) => {
  return (
    <div className="rounded-xl border border-[#ebe6de] bg-white p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">{title}</p>

          <h2 className="mt-2 text-2xl font-semibold text-[#292622]">
            {value}
          </h2>
        </div>

        <div
          className={`flex h-11 w-11 items-center justify-center rounded-lg ${iconStyle}`}
        >
          <Icon size={20} />
        </div>
      </div>

      <p className="mt-3 text-xs text-gray-500">
        {description}
      </p>
    </div>
  );
};

export default Users;