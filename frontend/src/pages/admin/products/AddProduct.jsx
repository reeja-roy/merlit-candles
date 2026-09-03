import React, { useState } from "react";
import {
  ArrowLeft,
  ImagePlus,
  X,
  Save,
  Package,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();

  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    const imageUrls = files.map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));

    setImages((prev) => [...prev, ...imageUrls]);
  };

  const removeImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // API call will come here
    console.log("Product submitted");
  };

  return (
    <div className="mx-auto max-w-6xl space-y-8">

      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/admin/products")}
            className="rounded-xl border border-[#e5ded4] bg-white p-2.5 text-gray-600 transition hover:bg-[#f3efe8]"
          >
            <ArrowLeft size={18} />
          </button>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
              Products
            </p>

            <h1 className="mt-1 text-3xl font-semibold tracking-tight">
              Add Product
            </h1>

            <p className="mt-1 text-sm text-gray-500">
              Add a new candle to your collection.
            </p>
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="flex items-center justify-center gap-2 rounded-xl bg-[#292622] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#403b35]"
        >
          <Save size={17} />
          Save Product
        </button>

      </div>

      <form onSubmit={handleSubmit}>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

          {/* LEFT */}
          <div className="space-y-6 lg:col-span-2">

            {/* Product Information */}
            <section className="rounded-2xl border border-[#e8e1d7] bg-white p-6">

              <div className="mb-6">
                <h2 className="text-lg font-semibold">
                  Product Information
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Basic information about your candle.
                </p>
              </div>

              <div className="space-y-5">

                {/* Name */}
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Product Name
                  </label>

                  <input
                    type="text"
                    placeholder="e.g. Vanilla Amber"
                    className="w-full rounded-xl border border-[#e5ded4] bg-[#fffdf9] px-4 py-3 text-sm outline-none transition focus:border-[#292622]"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Description
                  </label>

                  <textarea
                    rows="5"
                    placeholder="Describe the candle, fragrance and overall experience..."
                    className="w-full resize-none rounded-xl border border-[#e5ded4] bg-[#fffdf9] px-4 py-3 text-sm outline-none transition focus:border-[#292622]"
                  />
                </div>

                {/* Category + Scent */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Category
                    </label>

                    <select className="w-full rounded-xl border border-[#e5ded4] bg-[#fffdf9] px-4 py-3 text-sm text-gray-600 outline-none focus:border-[#292622]">
                      <option value="">Select category</option>
                      <option value="scented">Scented</option>
                      <option value="aromatherapy">
                        Aromatherapy
                      </option>
                      <option value="luxury">Luxury</option>
                      <option value="seasonal">Seasonal</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Fragrance / Scent
                    </label>

                    <input
                      type="text"
                      placeholder="e.g. Vanilla & Amber"
                      className="w-full rounded-xl border border-[#e5ded4] bg-[#fffdf9] px-4 py-3 text-sm outline-none focus:border-[#292622]"
                    />
                  </div>

                </div>

              </div>
            </section>

            {/* Pricing & Inventory */}
            <section className="rounded-2xl border border-[#e8e1d7] bg-white p-6">

              <div className="mb-6">
                <h2 className="text-lg font-semibold">
                  Pricing & Inventory
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Set your product price and available stock.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Price
                  </label>

                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-500">
                      ₹
                    </span>

                    <input
                      type="number"
                      placeholder="699"
                      className="w-full rounded-xl border border-[#e5ded4] bg-[#fffdf9] py-3 pl-8 pr-4 text-sm outline-none focus:border-[#292622]"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Discount Price
                  </label>

                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-500">
                      ₹
                    </span>

                    <input
                      type="number"
                      placeholder="599"
                      className="w-full rounded-xl border border-[#e5ded4] bg-[#fffdf9] py-3 pl-8 pr-4 text-sm outline-none focus:border-[#292622]"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Stock Quantity
                  </label>

                  <input
                    type="number"
                    placeholder="50"
                    className="w-full rounded-xl border border-[#e5ded4] bg-[#fffdf9] px-4 py-3 text-sm outline-none focus:border-[#292622]"
                  />
                </div>

              </div>
            </section>

            {/* Candle Details */}
            <section className="rounded-2xl border border-[#e8e1d7] bg-white p-6">

              <div className="mb-6">
                <h2 className="text-lg font-semibold">
                  Candle Details
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Add specifications customers may want to know.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Wax Type
                  </label>

                  <select className="w-full rounded-xl border border-[#e5ded4] bg-[#fffdf9] px-4 py-3 text-sm text-gray-600 outline-none focus:border-[#292622]">
                    <option value="">Select wax type</option>
                    <option value="soy">Soy Wax</option>
                    <option value="beeswax">Beeswax</option>
                    <option value="paraffin">Paraffin Wax</option>
                    <option value="coconut">Coconut Wax</option>
                    <option value="blend">Wax Blend</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Weight
                  </label>

                  <input
                    type="text"
                    placeholder="e.g. 200g"
                    className="w-full rounded-xl border border-[#e5ded4] bg-[#fffdf9] px-4 py-3 text-sm outline-none focus:border-[#292622]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Burn Time
                  </label>

                  <input
                    type="text"
                    placeholder="e.g. 35 hours"
                    className="w-full rounded-xl border border-[#e5ded4] bg-[#fffdf9] px-4 py-3 text-sm outline-none focus:border-[#292622]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Candle Size
                  </label>

                  <input
                    type="text"
                    placeholder="e.g. 8cm × 9cm"
                    className="w-full rounded-xl border border-[#e5ded4] bg-[#fffdf9] px-4 py-3 text-sm outline-none focus:border-[#292622]"
                  />
                </div>

              </div>
            </section>

            {/* Images */}
            <section className="rounded-2xl border border-[#e8e1d7] bg-white p-6">

              <div className="mb-6">
                <h2 className="text-lg font-semibold">
                  Product Images
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  Upload high-quality images of your candle.
                </p>
              </div>

              <label className="flex min-h-40 cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#ddd5ca] bg-[#fffdf9] transition hover:border-[#b9a991] hover:bg-[#faf7f1]">

                <ImagePlus
                  size={30}
                  className="text-gray-400"
                />

                <p className="mt-3 text-sm font-medium">
                  Click to upload images
                </p>

                <p className="mt-1 text-xs text-gray-400">
                  PNG, JPG or WEBP
                </p>

                <input
                  type="file"
                  accept="image/*"
                  multiple
                  className="hidden"
                  onChange={handleImageChange}
                />

              </label>

              {/* Preview */}
              {images.length > 0 && (
                <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">

                  {images.map((image, index) => (
                    <div
                      key={index}
                      className="group relative aspect-square overflow-hidden rounded-xl border border-[#e5ded4]"
                    >
                      <img
                        src={image.url}
                        alt={`Product ${index + 1}`}
                        className="h-full w-full object-cover"
                      />

                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute right-2 top-2 rounded-full bg-white p-1.5 text-gray-700 opacity-0 shadow transition group-hover:opacity-100"
                      >
                        <X size={15} />
                      </button>
                    </div>
                  ))}

                </div>
              )}

            </section>

          </div>

          {/* RIGHT */}
          <div className="space-y-6">

            {/* Status */}
            <section className="rounded-2xl border border-[#e8e1d7] bg-white p-6">

              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f3eee6]">
                  <Package size={19} />
                </div>

                <div>
                  <h2 className="font-semibold">
                    Product Status
                  </h2>

                  <p className="text-xs text-gray-500">
                    Store visibility
                  </p>
                </div>
              </div>

              <label className="flex cursor-pointer items-center justify-between rounded-xl border border-[#e8e1d7] p-4">

                <div>
                  <p className="text-sm font-medium">
                    Active
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    Product is visible in store
                  </p>
                </div>

                <input
                  type="checkbox"
                  defaultChecked
                  className="h-5 w-5 accent-[#292622]"
                />

              </label>

            </section>

            {/* Featured */}
            <section className="rounded-2xl border border-[#e8e1d7] bg-white p-6">

              <h2 className="font-semibold">
                Store Settings
              </h2>

              <div className="mt-5 space-y-4">

                <label className="flex cursor-pointer items-center justify-between">
                  <span className="text-sm">
                    Featured Product
                  </span>

                  <input
                    type="checkbox"
                    className="h-5 w-5 accent-[#292622]"
                  />
                </label>

                <label className="flex cursor-pointer items-center justify-between">
                  <span className="text-sm">
                    New Arrival
                  </span>

                  <input
                    type="checkbox"
                    className="h-5 w-5 accent-[#292622]"
                  />
                </label>

              </div>

            </section>

            {/* Save */}
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#292622] px-5 py-3.5 text-sm font-medium text-white transition hover:bg-[#403b35]"
            >
              <Save size={17} />
              Create Product
            </button>

            <button
              type="button"
              onClick={() => navigate("/admin/products")}
              className="w-full rounded-xl border border-[#e5ded4] bg-white px-5 py-3.5 text-sm font-medium text-gray-600 transition hover:bg-[#f8f5ef]"
            >
              Cancel
            </button>

          </div>

        </div>
      </form>
    </div>
  );
};

export default AddProduct;