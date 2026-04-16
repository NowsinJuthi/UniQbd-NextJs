"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import AdminMenuPage from "../Menu/page";

const AllProductpage = () => {
  const router = useRouter();
  const [products, setProducts] = useState([]);

  const toggleFeatured = async (id) => {
    try {
      const { data } = await axios.patch(
        `http://localhost:3001/api/v1/product/featured/${id}`,
      );

      setProducts((prev) => prev.map((p) => (p._id === id ? data.product : p)));
    } catch (error) {
      console.log("Featured toggle error:", error);
    }
  };

 useEffect(() => {
  fetchProducts();
}, []);

const fetchProducts = async () => {
  try {
    const { data } = await axios.get(
      "http://localhost:3001/api/v1/product?includeUnpublished=true"
    );

    setProducts(data.products);
  } catch (error) {
    console.log("Product load error:", error);
  }
};


  const deleteProduct = async (id) => {
    try {
      const confirmDelete = confirm(
        "Are you sure you want to delete this product?",
      );
      if (!confirmDelete) return;

      await axios.delete(`http://localhost:3001/api/v1/product/${id}`);
      fetchProducts();
    } catch (error) {
      console.log("Delete error:", error);
    }
  };

  const togglePublish = async (id) => {
    try {
      const { data } = await axios.patch(
        `http://localhost:3001/api/v1/product/publish/${id}`,
      );

      // Update UI instantly with DB response
      setProducts((prev) => prev.map((p) => (p._id === id ? data.product : p)));
    } catch (error) {
      console.log("Publish toggle error:", error);
    }
  };

  const visibleProducts = products;

  const allPrices = products
    .map((product) => {
      if (product.packageType?.length > 0) {
        const prices = product.packageType.map((pkg) =>
          Number(pkg.discountPrice || pkg.price),
        );
        return Math.min(...prices);
      }
      return Number(product.price || 0);
    })
    .filter((price) => !isNaN(price) && price > 0);

  const minPrice = allPrices.length ? Math.min(...allPrices) : null;
  const maxPrice = allPrices.length ? Math.max(...allPrices) : null;

  return (
    <div className="grid grid-cols-12 gap-6 p-6 min-h-screen bg-black/5">
      {/* SIDEBAR */}
      <aside className="md:col-span-3 p-6 border-r bg-button/5 rounded-2xl shadow-sm">
        <AdminMenuPage />
      </aside>

      {/* MAIN */}
      <main className="col-span-12 md:col-span-9 space-y-6">
        {/* HEADER */}
        <div className="bg-button/5 p-6 rounded-2xl shadow-sm flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">All Products</h1>
            <p className="text-gray-400 mt-1 text-sm">
              Manage your products, edit or remove items
            </p>
          </div>

          <div className="px-5 py-3 bg-button/10 rounded-xl text-sm text-center min-w-[140px]">
            <p className="font-medium">Total: {products?.length || 0}</p>

            {minPrice !== null && (
              <p className="text-xs mt-1 text-text/70">
                {minPrice === maxPrice
                  ? `${minPrice} TK`
                  : `${minPrice} TK - ${maxPrice} TK`}
              </p>
            )}
          </div>
        </div>

        {/* PRODUCTS */}
        <div className="bg-button/5 p-6 rounded-2xl shadow-sm">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {visibleProducts?.map((product) => {
              let displayPrice = product.price;
              let discountPercent = null;

              if (product.packageType && product.packageType.length > 0) {
                const lowestPackage = product.packageType.reduce((min, pkg) => {
                  const priceToCompare = pkg.discountPrice || pkg.price;
                  return priceToCompare < (min.discountPrice || min.price)
                    ? pkg
                    : min;
                }, product.packageType[0]);

                const originalPrice = lowestPackage.price;
                const finalPrice =
                  lowestPackage.discountPrice || lowestPackage.price;

                displayPrice = `${finalPrice} TK`;

                if (lowestPackage.discountPrice) {
                  discountPercent = Math.round(
                    ((originalPrice - finalPrice) / originalPrice) * 100,
                  );
                }
              }

              const isPublished = product.isPublished ?? true;

              return (
                <div
                  key={product._id}
                  className="bg-white/5 rounded-2xl p-4 flex flex-col justify-between hover:scale-[1.03] transition duration-200 shadow-sm"
                >
                  {/* IMAGE + INFO */}
                  <Link
                    href={`/products/${product.slug}`}
                    className="flex flex-col items-center flex-1"
                  >
                    <div className="w-full h-36 flex items-center justify-center mb-3">
                      <img
                        src={`http://localhost:3001/uploads/${product.photo}`}
                        alt={product.name}
                        className="max-h-full object-contain"
                      />
                    </div>

                    <h2 className="text-sm font-semibold text-center text-button truncate w-full">
                      {product.name}
                    </h2>

                    <div className="text-center mt-2">
                      <p className="text-xs text-text/70 font-medium">
                        {displayPrice}
                      </p>

                      {discountPercent && (
                        <span className="text-[10px] text-green-400 font-semibold">
                          {discountPercent}% OFF
                        </span>
                      )}
                    </div>
                  </Link>

                  {/* STATUS */}
                  <div className="mt-3 flex justify-center">
                    {isPublished ? (
                      <span className="text-[10px] px-2 py-1 rounded-full bg-green-500/10 text-green-400">
                        Published
                      </span>
                    ) : (
                      <span className="text-[10px] px-2 py-1 rounded-full bg-red-500/10 text-red-400">
                        Unpublished
                      </span>
                    )}
                  </div>

                  {/* ACTIONS */}
                  <div className="flex flex-col gap-2 mt-4">
                    <button
                      onClick={() => togglePublish(product._id, isPublished)}
                      className={`text-xs py-2 rounded-xl transition font-medium ${
                        isPublished
                          ? "bg-red-500/10 text-red-400 hover:bg-red-500/20"
                          : "bg-green-500/10 text-green-400 hover:bg-green-500/20"
                      }`}
                    >
                      {isPublished ? "Unpublish" : "Publish"}
                    </button>
                    <button
                      onClick={() => toggleFeatured(product._id)}
                      className={`text-xs py-2 rounded-xl transition font-medium ${
                        product.featured
                          ? "bg-yellow-500/20 text-yellow-400"
                          : "bg-gray-500/10 text-gray-400"
                      }`}
                    >
                      {product.featured ? "⭐ Featured" : "☆ Make Featured"}
                    </button>
                    <div className="flex gap-2">
                      <button
                        onClick={() =>
                          router.push(`/admin/products?editId=${product.slug}`)
                        }
                        className="flex-1 bg-button/10 text-text text-xs py-2 rounded-xl hover:bg-button/20 transition font-medium"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => deleteProduct(product._id)}
                        className="flex-1 bg-red-500/10 text-red-400 text-xs py-2 rounded-xl hover:bg-red-500/20 transition font-medium"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AllProductpage;
