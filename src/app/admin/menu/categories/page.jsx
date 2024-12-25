"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const MenuCategoryPage = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const router = useRouter();

  const categoriesPerPage = 10; // Adjust this as needed

  const handleAddCategory = () => {
    router.push("/admin/menu/categories/create");
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `/api/categories?page=${currentPage}&limit=${categoriesPerPage}`
        );
        if (response.ok) {
          const data = await response.json();
          console.log('data', data);
          setCategories(data); // Assuming API returns { categories, totalPages }
          setTotalPages(data.totalPages);
        } else {
          console.error("Failed to fetch categories");
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="p-4">
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-2xl font-bold">Categories</h2>
        <button
          onClick={handleAddCategory}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Add Category
        </button>
      </div>

      {loading ? (
        <p className="text-gray-500">Loading categories...</p>
      ) : (
        <>
          <table className="w-full table-auto border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border border-gray-200 px-4 py-2">Name</th>
                <th className="border border-gray-200 px-4 py-2">Slug</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <tr key={category._id} className="hover:bg-gray-50">
                  <td className="border border-gray-200 px-4 py-2">
                    {category.name}
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    {category.slug}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex justify-between items-center mt-4">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded ${
                currentPage === 1
                  ? "bg-gray-300"
                  : "bg-red-500 text-white hover:bg-red-600"
              }`}
            >
              Previous
            </button>
            <span className="text-gray-600">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded ${
                currentPage === totalPages
                  ? "bg-gray-300"
                  : "bg-red-500 text-white hover:bg-red-600"
              }`}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default MenuCategoryPage;
