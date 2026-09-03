import React from "react";
import {
  IndianRupee,
  ShoppingBag,
  Package,
  Users,
  ArrowUpRight,
  ArrowDownRight,
  AlertTriangle,
  MoreHorizontal,
} from "lucide-react";

const Overview = () => {
  const stats = [
    {
      title: "Total Revenue",
      value: "₹84,650",
      change: "+12.5%",
      positive: true,
      icon: IndianRupee,
    },
    {
      title: "Total Orders",
      value: "326",
      change: "+8.2%",
      positive: true,
      icon: ShoppingBag,
    },
    {
      title: "Products",
      value: "48",
      change: "+4",
      positive: true,
      icon: Package,
    },
    {
      title: "Customers",
      value: "1,248",
      change: "-2.4%",
      positive: false,
      icon: Users,
    },
  ];

  const recentOrders = [
    {
      id: "#ORD-1024",
      customer: "Ananya Menon",
      product: "Vanilla Amber",
      amount: "₹1,398",
      status: "Delivered",
    },
    {
      id: "#ORD-1023",
      customer: "Rahul Kumar",
      product: "Lavender Calm",
      amount: "₹799",
      status: "Processing",
    },
    {
      id: "#ORD-1022",
      customer: "Meera Joseph",
      product: "Rosewood",
      amount: "₹999",
      status: "Shipped",
    },
    {
      id: "#ORD-1021",
      customer: "Arjun Nair",
      product: "Coconut Cream",
      amount: "₹599",
      status: "Pending",
    },
  ];

  const lowStock = [
    {
      name: "Rosewood",
      stock: 5,
    },
    {
      name: "Lavender Calm",
      stock: 4,
    },
    {
      name: "Coconut Cream",
      stock: 2,
    },
  ];

  return (
    <div className="space-y-8">

      {/* Header */}
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
          Store Overview
        </p>

        <div className="mt-2 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight">
              Dashboard
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Here's what's happening with your candle store today.
            </p>
          </div>

          <div className="rounded-xl border border-[#e5ded4] bg-white px-4 py-2.5 text-sm text-gray-600">
            Last 30 days
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="rounded-2xl border border-[#e8e1d7] bg-white p-5"
            >
              <div className="flex items-start justify-between">

                <div>
                  <p className="text-sm text-gray-500">
                    {stat.title}
                  </p>

                  <h2 className="mt-3 text-2xl font-semibold">
                    {stat.value}
                  </h2>

                  <div className="mt-2 flex items-center gap-1 text-xs">
                    {stat.positive ? (
                      <ArrowUpRight
                        size={14}
                        className="text-green-600"
                      />
                    ) : (
                      <ArrowDownRight
                        size={14}
                        className="text-red-500"
                      />
                    )}

                    <span
                      className={
                        stat.positive
                          ? "text-green-600"
                          : "text-red-500"
                      }
                    >
                      {stat.change}
                    </span>

                    <span className="text-gray-400">
                      vs last month
                    </span>
                  </div>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f3eee6]">
                  <Icon size={20} />
                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* Main dashboard grid */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">

        {/* Sales chart */}
        <section className="rounded-2xl border border-[#e8e1d7] bg-white p-6 xl:col-span-2">

          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-lg font-semibold">
                Sales Overview
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Revenue performance over the last 30 days.
              </p>
            </div>

            <button className="rounded-lg p-2 text-gray-400 hover:bg-[#f5f1ea]">
              <MoreHorizontal size={20} />
            </button>
          </div>

          {/* Simple chart */}
          <div className="mt-8">

            <div className="flex h-64 items-end gap-2 sm:gap-4">

              {[35, 48, 42, 62, 52, 70, 58, 76, 65, 82, 74, 92].map(
                (height, index) => (
                  <div
                    key={index}
                    className="group flex flex-1 flex-col items-center justify-end gap-2"
                  >
                    <div
                      className="w-full max-w-10 rounded-t-lg bg-[#d7b98e] transition group-hover:bg-[#292622]"
                      style={{ height: `${height}%` }}
                    />
                  </div>
                )
              )}

            </div>

            <div className="mt-3 flex justify-between text-xs text-gray-400">
              <span>Week 1</span>
              <span>Week 2</span>
              <span>Week 3</span>
              <span>Week 4</span>
            </div>

          </div>

        </section>

        {/* Low stock */}
        <section className="rounded-2xl border border-[#e8e1d7] bg-white p-6">

          <div className="flex items-start justify-between">

            <div>
              <h2 className="text-lg font-semibold">
                Low Stock
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Products that need attention.
              </p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
              <AlertTriangle size={19} />
            </div>

          </div>

          <div className="mt-6 space-y-4">

            {lowStock.map((product) => (
              <div
                key={product.name}
                className="flex items-center justify-between rounded-xl border border-[#eee8df] p-4"
              >
                <div>
                  <p className="text-sm font-medium">
                    {product.name}
                  </p>

                  <p className="mt-1 text-xs text-gray-400">
                    Candle
                  </p>
                </div>

                <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700">
                  {product.stock} left
                </span>
              </div>
            ))}

          </div>

          <button className="mt-5 w-full rounded-xl border border-[#e5ded4] py-2.5 text-sm font-medium text-gray-600 transition hover:bg-[#f8f5ef]">
            View Inventory
          </button>

        </section>

      </div>

      {/* Recent Orders */}
      <section className="overflow-hidden rounded-2xl border border-[#e8e1d7] bg-white">

        <div className="flex items-center justify-between border-b border-[#eee8df] px-6 py-5">

          <div>
            <h2 className="text-lg font-semibold">
              Recent Orders
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Latest customer orders.
            </p>
          </div>

          <button className="text-sm font-medium text-gray-600 hover:text-black">
            View all
          </button>

        </div>

        <div className="overflow-x-auto">

          <table className="w-full min-w-[750px] text-left">

            <thead className="bg-[#fffdf9]">
              <tr>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Order
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Customer
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Product
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Amount
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Status
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[#eee8df]">

              {recentOrders.map((order) => (
                <tr
                  key={order.id}
                  className="transition hover:bg-[#fffdf9]"
                >
                  <td className="px-6 py-4 text-sm font-medium">
                    {order.id}
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-600">
                    {order.customer}
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-600">
                    {order.product}
                  </td>

                  <td className="px-6 py-4 text-sm font-medium">
                    {order.amount}
                  </td>

                  <td className="px-6 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        order.status === "Delivered"
                          ? "bg-green-50 text-green-700"
                          : order.status === "Shipped"
                          ? "bg-blue-50 text-blue-700"
                          : order.status === "Processing"
                          ? "bg-amber-50 text-amber-700"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}

            </tbody>

          </table>

        </div>
      </section>

    </div>
  );
};

export default Overview;