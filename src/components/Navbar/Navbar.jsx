import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { IoExit } from "react-icons/io5";
import { LanguageContext } from "../LanguageContext";
import { BlogContext } from "../../context/BlogContext";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const { t } = useTranslation();
  const { language, changeLanguage } = useContext(LanguageContext);
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const { blogs, loading } = useContext(BlogContext);


  useEffect(() => {
    // Derive unique categories from blogs when blogs or language changes
    const uniqueCategories = [...new Set(blogs.map(item => item.category?.toLowerCase()))];
    setCategories(uniqueCategories);
  }, [blogs, language]);


  useEffect(() => {
    const checkAuth = () => {
      const token = localStorage.getItem("token");
      setIsLoggedIn(!!token);
    };

    checkAuth();
    window.addEventListener("storage", checkAuth);
    window.addEventListener("loginStatusChanged", checkAuth);

    return () => {
      window.removeEventListener("storage", checkAuth);
      window.removeEventListener("loginStatusChanged", checkAuth);
    };
  }, []);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    const trimmedValue = value.trim().toLowerCase();
    if (!trimmedValue) {
      setFilteredResults([]);
      return;
    }

    const results = blogs.filter((blog) => {
      const title =
        typeof blog.title === "string"
          ? blog.title
          : blog.title?.[language];

      console.log("📝 Final title used for search:", title);

      if (!title) return false;

      return title.toLowerCase().includes(trimmedValue);
    });

    console.log("✅ Filtered Results:", results);
    setFilteredResults(results);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
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
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        <div className={`flex flex-col md:flex-row items-center gap-4 w-full md:w-auto ${isOpen ? "block" : "hidden"} md:block`}>
          {/* Search */}
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
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>

              {searchTerm && (
                <ul className="absolute z-20 bg-white border p-2 border-red-400 w-full mt-1 rounded-lg shadow-md max-h-60 overflow-y-auto text-black">
                  {filteredResults.length > 0 ? (
                    filteredResults.map((item) => (
                      <li
                        key={item._id}
                        className="flex items-center gap-4 px-4 py-3 hover:bg-red-100 rounded-md cursor-pointer transition-colors"
                      >
                        <Link
                          to={`/blogs/${item._id}`}
                          className="flex items-center gap-4 w-full"
                          onClick={() => {
                            setSearchTerm("");
                            setFilteredResults([]);
                            setIsOpen(false);
                          }}
                        >
                          <img
                            src={item.imageUrl || "/placeholder.jpg"}
                            alt={typeof item.title === "string" ? item.title : item.title?.[language]}
                            className="w-14 h-14 object-cover rounded-md flex-shrink-0"
                          />
                          <div className="flex flex-col overflow-hidden">
                            <span className="text-black font-semibold truncate">
                              {typeof item.title === "string"
                                ? item.title
                                : item.title?.[language] || "No Title"}
                            </span>
                            {item.summary && (
                              <span className="text-gray-600 text-sm truncate">
                                {item.summary.length > 80
                                  ? item.summary.substring(0, 80) + "..."
                                  : item.summary}
                              </span>
                            )}
                          </div>
                        </Link>
                      </li>
                    ))
                  ) : (
                    <li className="px-4 py-2 text-gray-600">No matching results.</li>
                  )}
                </ul>
              )}


            </div>
          </div>

          {/* Categories */}
          <nav className="w-full md:w-auto">
            <div className="flex gap-3 overflow-x-auto scrollbar-hide px-2 font-medium text-black text-md">
              <Link to="/" className="hover:text-red-900 px-3 py-2 rounded-md font-medium whitespace-nowrap">
                {t("home")}
              </Link>
              {categories.map((cat, i) => (
                <Link key={i} to={`/${cat}`} className="hover:text-red-900 px-3 py-2 rounded-md font-medium whitespace-nowrap">
                  {t(cat) || cat}
                </Link>
              ))}
            </div>
          </nav>
        </div>

        {/* Right Controls */}
        <div className="hidden md:flex items-center gap-4">
          <select
            value={language}
            onChange={(e) => changeLanguage(e.target.value)}
            className="border-2 border-red-600 text-red-700 px-3 py-1.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          >
            <option value="en">English</option>
            <option value="bn">বাংলা</option>
          </select>

          <Link to="/donate" className="text-red-700 border-2 border-red-700 px-5 py-1.5 rounded-lg hover:bg-red-700 hover:text-white transition font-semibold">
            {t("donate")}
          </Link>

          {isLoggedIn && (
            <Link to="/admin/blogs" className="text-red-700 border-2 border-red-700 px-5 py-1.5 rounded-lg hover:bg-red-700 hover:text-white transition font-semibold">
              {t("admin")}
            </Link>
          )}

          {isLoggedIn ? (
            <button onClick={handleLogout} className="relative group text-red-700 px-2 py-1.5 text-4xl" aria-label="Logout">
              <IoExit />
              <span className="absolute top-full left-1/2 -translate-x-1/2 text-sm bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition duration-200 whitespace-nowrap z-10">
                Logout
              </span>
            </button>
          ) : (
            <Link to="/login" className="text-red-700 border-2 border-red-700 px-5 py-2 rounded-lg hover:bg-red-700 hover:text-white transition font-semibold">
              {t("login")}
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
