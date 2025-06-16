import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { IoExit } from "react-icons/io5";

// const categories = [
//   { id: 1, name: "sports", rout: "sports" },
//   { id: 2, name: "entertainment", rout: "entertainment" },
//   { id: 3, name: "technology", rout: "technology" },
//   { id: 4, name: "health", rout: "health" },
//   { id: 5, name: "education", rout: "education" },
//   { id: 6, name: "politics", rout: "politics" },
//   { id: 7, name: "international", rout: "international" },
// ];

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);


  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("token");
      setIsLoggedIn(!!token);
    };

    checkAuth();

    // Listen to changes (login/logout)
    window.addEventListener("storage", checkAuth);
    window.addEventListener("loginStatusChanged", checkAuth);

    return () => {
      window.removeEventListener("storage", checkAuth);
      window.removeEventListener("loginStatusChanged", checkAuth);
    };
  }, []);

  useEffect(() => {
    axios
      .get("https://mts-blog-backend1.onrender.com/blogs")
      .then((res) => {
        setBlogs(res.data);

        // Extract unique categories dynamically
        const unique = [
          ...new Set(res.data.map((item) => item.category?.toLowerCase()))
        ];
        setCategories(unique);
      })
      .catch((err) => console.error("Error fetching blogs:", err));
  }, []);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (!value.trim()) return setFilteredResults([]);

    const results = blogs.filter((blog) =>
      blog.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredResults(results);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userRole"); // if storing role
    window.dispatchEvent(new Event("loginStatusChanged"));
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto px-4 py-2 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link to="/">
            <img src="./logo.png" alt="Logo" className="h-12 w-full" />
          </Link>
          <button
            className="md:hidden text-red-700"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        <div
          className={`flex flex-col md:flex-row items-center gap-4 w-full md:w-auto ${isOpen ? "block" : "hidden"
            } md:block`}
        >
          {/* Search Input */}
          <div className="w-full flex justify-center lg:ml-23 mb-2">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder={t("search_placeholder")}
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full pl-12 pr-4 py-1 border-2 border-red-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-black text-lg"
              />
              <span className="absolute left-4 top-3 text-red-600">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </span>

              {filteredResults.length > 0 && (
                <ul className="absolute z-20 bg-white border p-2 border-red-400 w-full mt-1 rounded-lg shadow-md max-h-60 overflow-y-auto text-black">
                  {filteredResults.map((item) => (
                    <li
                      key={item._id}
                      className="flex items-center gap-3 px-4 py-2 hover:bg-red-200 hover:rounded-sm cursor-pointer"
                    >
                      <Link
                        to={`/blogs/${item._id}`}
                        className="flex items-center gap-3 w-full"
                        onClick={() => {
                          setSearchTerm("");
                          setFilteredResults([]);
                          setIsOpen(false);
                        }}
                      >
                        <img
                          src={item.imageUrl || "/placeholder.jpg"}
                          alt={item.title}
                          className="w-12 h-12 object-cover rounded"
                        />
                        <span className="text-black">{item.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Category Navigation */}
          <nav className="w-full md:w-auto">
            <div className="flex gap-3 overflow-x-auto scrollbar-hide px-2 font-medium text-black text-md">
              <Link
                to="/"
                className="hover:text-red-900 px-3 py-2 rounded-md font-medium whitespace-nowrap"
              >
                {t("home")}
              </Link>
              {categories.map((cat, i) => (
                <Link
                  key={i}
                  to={`${cat}`}
                  className="hover:text-red-900 px-3 py-2 rounded-md font-medium whitespace-nowrap"
                >
                  {t(`${cat}`) || cat}
                </Link>
              ))}
            </div>
          </nav>
        </div>

        {/* Right Side Controls */}
        <div className="hidden md:flex items-center gap-4">
          <select
            value={i18n.language}
            onChange={(e) => i18n.changeLanguage(e.target.value)}
            className="border-2 border-red-600 text-red-700 px-3 py-1.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="en">English</option>
            <option value="bn">বাংলা</option>
            <option value="hi">Hindi</option>
          </select>

          <Link
            to="/donate"
            className="text-red-700 border-2 border-red-700 px-5 py-1.5 rounded-lg hover:bg-red-700 hover:text-white transition font-semibold"
          >
            {t("donate")}
          </Link>

          {isLoggedIn && (
            <Link
              to="/admin/blogs"
              className="text-red-700 border-2 border-red-700 px-5 py-1.5 rounded-lg hover:bg-red-700 hover:text-white transition font-semibold"
            >
              Admin
            </Link>
          )}

          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="relative group text-red-700 px-2 py-1.5 text-4xl"
              aria-label="Logout"
            >
              <IoExit />
              <span className="absolute top-full left-1/2 -translate-x-1/2 text-sm bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-200 whitespace-nowrap z-10">
                Logout
              </span>
            </button>
          ) : (
            <Link
              to="/login"
              className="text-red-700 border-2 border-red-700 px-5 py-2 rounded-lg hover:bg-red-700 hover:text-white transition font-semibold"
            >
              {t("login")}
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
