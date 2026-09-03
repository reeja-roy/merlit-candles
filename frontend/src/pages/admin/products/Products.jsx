import React from "react";
import {
  Plus,
  Search,
  MoreVertical,
  Pencil,
  Trash2,
  Package,
  AlertTriangle,
  Layers3,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate()
  const products = [
    {
      id: 1,
      name: "Vanilla Amber",
      scent: "Vanilla & Amber",
      category: "Scented",
      price: "₹699",
      stock: 24,
      image:
        "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 2,
      name: "Lavender Calm",
      scent: "Lavender",
      category: "Aromatherapy",
      price: "₹799",
      stock: 12,
      image:
        "https://imgs.search.brave.com/3qC1Yka122CzgvRiQKpUBh2BK-QYvu454999Xlu9_e8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/MTIyOTM5MDU2MDct/YjAwM2RlOWU1NGZi/P2ZtPWpwZyZxPTYw/Jnc9MzAwMCZhdXRv/PWZvcm1hdCZmaXQ9/Y3JvcCZpeGxpYj1y/Yi00LjEuMCZpeGlk/PU0zd3hNakEzZkRC/OE1IeHpaV0Z5WTJo/OE4zeDhZMkZ1Wkd4/bGZHVnVmREI4ZkRC/OGZId3c",
    },
    {
      id: 3,
      name: "Rosewood",
      scent: "Rose & Sandalwood",
      category: "Luxury",
      price: "₹999",
      stock: 5,
      image:
        "https://imgs.search.brave.com/4ubX9HxLcPT0s4A-eQSZXaaSehC5xXbnyvyGVhKURCA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/Y2FuZGxlLWxpZ2h0/LmpwZz93aWR0aD0x/MDAwJmZvcm1hdD1w/anBnJmV4aWY9MCZp/cHRjPTA",
    },
    {
      id: 4,
      name: "Coconut Cream",
      scent: "Coconut",
      category: "Scented",
      price: "₹599",
      stock: 0,
      image:
        "https://imgs.search.brave.com/n_j8bFoFC2bKFSz8xEt5eR7HXpUhKsk5knj5BgVUAWs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjYv/MjkzLzk3OS9zbWFs/bC92b3RpdmUtd2F4/LWNhbmRsZXMtcGhv/dG8uanBn",
    },
  ];

  return (
    <div className="space-y-8">

      {/* Header */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
            Store Management
          </p>

          <h1 className="mt-2 text-3xl font-semibold tracking-tight">
            Products
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Manage your candle collection and inventory.
          </p>
        </div>

        <button className="flex items-center justify-center gap-2 rounded-xl bg-[#292622] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#403b35]"onClick={()=>navigate('add')}>
          <Plus size={18} />
          Add Product
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

        <div className="rounded-2xl border border-[#e8e1d7] bg-white p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Products</p>
              <h2 className="mt-2 text-2xl font-semibold">48</h2>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f3eee6]">
              <Layers3 size={20} />
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-[#e8e1d7] bg-white p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">In Stock</p>
              <h2 className="mt-2 text-2xl font-semibold">42</h2>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-50 text-green-700">
              <Package size={20} />
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-[#e8e1d7] bg-white p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Low Stock</p>
              <h2 className="mt-2 text-2xl font-semibold">6</h2>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-700">
              <AlertTriangle size={20} />
            </div>
          </div>
        </div>

      </div>

      {/* Filters */}
      <div className="flex flex-col gap-3 rounded-2xl border border-[#e8e1d7] bg-white p-4 md:flex-row">

        {/* Search */}
        <div className="relative flex-1">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search candles..."
            className="w-full rounded-xl border border-[#e5ded4] bg-[#fffdf9] py-3 pl-11 pr-4 text-sm outline-none transition focus:border-[#292622]"
          />
        </div>

        {/* Category */}
        <select className="rounded-xl border border-[#e5ded4] bg-[#fffdf9] px-4 py-3 text-sm text-gray-600 outline-none">
          <option>All Categories</option>
          <option>Scented</option>
          <option>Luxury</option>
          <option>Aromatherapy</option>
        </select>

        {/* Stock */}
        <select className="rounded-xl border border-[#e5ded4] bg-[#fffdf9] px-4 py-3 text-sm text-gray-600 outline-none">
          <option>All Stock</option>
          <option>In Stock</option>
          <option>Low Stock</option>
          <option>Out of Stock</option>
        </select>

      </div>

      {/* Product table */}
      <div className="overflow-hidden rounded-2xl border border-[#e8e1d7] bg-white">

        <div className="overflow-x-auto">
          <table className="w-full min-w-[850px] text-left">

            <thead className="border-b border-[#eee8df] bg-[#fffdf9]">
              <tr>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Product
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Category
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Price
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Stock
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Status
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[#eee8df]">

              {products.map((product) => (
                <tr
                  key={product.id}
                  className="transition hover:bg-[#fffdf9]"
                >

                  {/* Product */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">

                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-14 w-14 rounded-xl object-cover"
                      />

                      <div>
                        <p className="font-medium text-[#292622]">
                          {product.name}
                        </p>

                        <p className="mt-1 text-xs text-gray-500">
                          {product.scent}
                        </p>
                      </div>

                    </div>
                  </td>

                  {/* Category */}
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {product.category}
                  </td>

                  {/* Price */}
                  <td className="px-6 py-4 text-sm font-medium">
                    {product.price}
                  </td>

                  {/* Stock */}
                  <td className="px-6 py-4 text-sm">
                    {product.stock} units
                  </td>

                  {/* Status */}
                  <td className="px-6 py-4">

                    {product.stock === 0 ? (
                      <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-red-600">
                        Out of stock
                      </span>
                    ) : product.stock <= 5 ? (
                      <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700">
                        Low stock
                      </span>
                    ) : (
                      <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                        In stock
                      </span>
                    )}

                  </td>

                  {/* Actions */}
                  <td className="px-6 py-4">

                    <div className="flex items-center gap-2">

                      <button className="rounded-lg p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-900">
                        <Pencil size={16} />
                      </button>

                      <button className="rounded-lg p-2 text-gray-500 transition hover:bg-red-50 hover:text-red-600">
                        <Trash2 size={16} />
                      </button>

                      <button className="rounded-lg p-2 text-gray-500 transition hover:bg-gray-100">
                        <MoreVertical size={16} />
                      </button>

                    </div>

                  </td>

                </tr>
              ))}

            </tbody>

          </table>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-[#eee8df] px-6 py-4">

          <p className="text-sm text-gray-500">
            Showing <span className="font-medium text-gray-700">4</span> of{" "}
            <span className="font-medium text-gray-700">48</span> products
          </p>

          <div className="flex gap-2">
            <button className="rounded-lg border border-[#e5ded4] px-3 py-2 text-sm text-gray-500">
              Previous
            </button>

            <button className="rounded-lg bg-[#292622] px-3 py-2 text-sm text-white">
              1
            </button>

            <button className="rounded-lg border border-[#e5ded4] px-3 py-2 text-sm text-gray-600">
              2
            </button>

            <button className="rounded-lg border border-[#e5ded4] px-3 py-2 text-sm text-gray-600">
              Next
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Products;