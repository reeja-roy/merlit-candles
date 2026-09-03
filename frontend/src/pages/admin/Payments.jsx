import React from "react";
import {
  Search,
  Filter,
  Download,
  Eye,
  CreditCard,
  CheckCircle2,
  Clock3,
  XCircle,
  IndianRupee,
} from "lucide-react";

const Payments = () => {
  const payments = [
    {
      id: "#PAY-1024",
      orderId: "#ORD-1024",
      customer: "Ananya Menon",
      amount: 1398,
      method: "UPI",
      date: "03 Sep 2026",
      status: "Paid",
    },
    {
      id: "#PAY-1023",
      orderId: "#ORD-1023",
      customer: "Rahul Kumar",
      amount: 799,
      method: "Credit Card",
      date: "03 Sep 2026",
      status: "Pending",
    },
    {
      id: "#PAY-1022",
      orderId: "#ORD-1022",
      customer: "Meera Joseph",
      amount: 999,
      method: "UPI",
      date: "02 Sep 2026",
      status: "Paid",
    },
    {
      id: "#PAY-1021",
      orderId: "#ORD-1021",
      customer: "Arjun Nair",
      amount: 599,
      method: "Cash on Delivery",
      date: "02 Sep 2026",
      status: "Pending",
    },
    {
      id: "#PAY-1020",
      orderId: "#ORD-1020",
      customer: "Diya Thomas",
      amount: 1598,
      method: "Debit Card",
      date: "01 Sep 2026",
      status: "Paid",
    },
    {
      id: "#PAY-1019",
      orderId: "#ORD-1019",
      customer: "Nikhil Raj",
      amount: 699,
      method: "UPI",
      date: "01 Sep 2026",
      status: "Failed",
    },
  ];

  const statusStyles = {
    Paid: "bg-emerald-50 text-emerald-700",
    Pending: "bg-amber-50 text-amber-700",
    Failed: "bg-red-50 text-red-700",
  };

  return (
    <div className="min-h-screen bg-[#f8f6f1] p-6">
      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-medium text-[#a78b6d]">
            Payment Management
          </p>

          <h1 className="mt-1 text-2xl font-semibold text-[#292622]">
            Payments
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Track and manage all customer payments.
          </p>
        </div>

        <button className="flex items-center justify-center gap-2 rounded-lg bg-[#292622] px-4 py-2.5 text-sm font-medium text-white transition hover:bg-[#403b35]">
          <Download size={17} />
          Export
        </button>
      </div>

      {/* Stats */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {/* Total Revenue */}
        <div className="rounded-xl border border-[#ebe6de] bg-white p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Revenue</p>
              <h2 className="mt-2 text-2xl font-semibold text-[#292622]">
                ₹84,650
              </h2>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#f5eee5] text-[#a78b6d]">
              <IndianRupee size={20} />
            </div>
          </div>

          <p className="mt-3 text-xs text-emerald-600">
            +12.5% from last month
          </p>
        </div>

        {/* Successful */}
        <div className="rounded-xl border border-[#ebe6de] bg-white p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Successful Payments</p>
              <h2 className="mt-2 text-2xl font-semibold text-[#292622]">
                298
              </h2>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
              <CheckCircle2 size={20} />
            </div>
          </div>

          <p className="mt-3 text-xs text-gray-500">
            91.4% success rate
          </p>
        </div>

        {/* Pending */}
        <div className="rounded-xl border border-[#ebe6de] bg-white p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Pending</p>
              <h2 className="mt-2 text-2xl font-semibold text-[#292622]">
                21
              </h2>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-amber-50 text-amber-600">
              <Clock3 size={20} />
            </div>
          </div>

          <p className="mt-3 text-xs text-gray-500">
            Awaiting confirmation
          </p>
        </div>

        {/* Failed */}
        <div className="rounded-xl border border-[#ebe6de] bg-white p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Failed Payments</p>
              <h2 className="mt-2 text-2xl font-semibold text-[#292622]">
                7
              </h2>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-red-50 text-red-600">
              <XCircle size={20} />
            </div>
          </div>

          <p className="mt-3 text-xs text-red-500">
            Requires attention
          </p>
        </div>
      </div>

      {/* Filters */}
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
              placeholder="Search payment or customer..."
              className="w-full rounded-lg border border-gray-200 bg-[#fcfbf9] py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-[#c8aa86]"
            />
          </div>

          <div className="flex gap-3">
            {/* Status */}
            <select className="rounded-lg border border-gray-200 bg-[#fcfbf9] px-4 py-2.5 text-sm text-gray-600 outline-none">
              <option>All Status</option>
              <option>Paid</option>
              <option>Pending</option>
              <option>Failed</option>
            </select>

            {/* Payment Method */}
            <select className="hidden rounded-lg border border-gray-200 bg-[#fcfbf9] px-4 py-2.5 text-sm text-gray-600 outline-none sm:block">
              <option>All Methods</option>
              <option>UPI</option>
              <option>Credit Card</option>
              <option>Debit Card</option>
              <option>Cash on Delivery</option>
            </select>

            <button className="flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-50">
              <Filter size={16} />
              Filter
            </button>
          </div>
        </div>
      </div>

      {/* Payment Table */}
      <div className="mt-4 overflow-hidden rounded-xl border border-[#ebe6de] bg-white">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] text-left">
            <thead className="border-b border-[#ebe6de] bg-[#fcfbf9]">
              <tr>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Payment ID
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Customer
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Order
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Amount
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Method
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Date
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Status
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[#f0ece6]">
              {payments.map((payment) => (
                <tr
                  key={payment.id}
                  className="transition hover:bg-[#fcfbf9]"
                >
                  {/* Payment ID */}
                  <td className="px-6 py-4">
                    <span className="text-sm font-medium text-[#292622]">
                      {payment.id}
                    </span>
                  </td>

                  {/* Customer */}
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-700">
                      {payment.customer}
                    </span>
                  </td>

                  {/* Order */}
                  <td className="px-6 py-4">
                    <span className="text-sm text-[#a78b6d]">
                      {payment.orderId}
                    </span>
                  </td>

                  {/* Amount */}
                  <td className="px-6 py-4">
                    <span className="text-sm font-semibold text-[#292622]">
                      ₹{payment.amount.toLocaleString("en-IN")}
                    </span>
                  </td>

                  {/* Method */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <CreditCard size={16} className="text-gray-400" />
                      {payment.method}
                    </div>
                  </td>

                  {/* Date */}
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {payment.date}
                  </td>

                  {/* Status */}
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
                        statusStyles[payment.status]
                      }`}
                    >
                      {payment.status}
                    </span>
                  </td>

                  {/* Action */}
                  <td className="px-6 py-4">
                    <button className="rounded-lg p-2 text-gray-500 transition hover:bg-gray-100 hover:text-[#292622]">
                      <Eye size={17} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between border-t border-[#ebe6de] px-6 py-4">
          <p className="text-sm text-gray-500">
            Showing <span className="font-medium text-gray-700">1–6</span>{" "}
            of <span className="font-medium text-gray-700">326</span> payments
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

export default Payments;