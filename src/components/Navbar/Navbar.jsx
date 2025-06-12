import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";


const categories = [
  { id: 1, name: "sports", rout: "sports" },
  { id: 2, name: "entertainment", rout: "entertainment" },
  { id: 3, name: "technology", rout: "technology" },
  { id: 4, name: "health", rout: "health" },
  { id: 5, name: "education", rout: "education" },
  { id: 6, name: "politics", rout: "politics" },
  { id: 7, name: "international", rout: "international" },
];

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  // local storage cheeck
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  // fetch blogs
  useEffect(() => {
    axios
      .get("https://mts-blog-backend.onrender.com/blogs")
      .then((res) => setBlogs(res.data))
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

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Controls */}
      <div className="max-w-[1400px] mx-auto px-4 py-2 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo + Mobile Toggle */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link to="/">
            <img src="./logo.png" alt="Logo" className="h-12" />
          </Link>
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Search */}
        <div className="relative md:w-80 w-full">
          <input
            type="text"
            placeholder={t("search_placeholder")}
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring"
          />
          <span className="absolute left-3 top-2.5 text-gray-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </span>
          {filteredResults.length > 0 && (
            <ul className="absolute z-10 bg-white border w-full mt-1 rounded shadow-md max-h-60 overflow-y-auto">
              {filteredResults.map((item) => (
                <li key={item._id} className="px-4 py-2 hover:bg-gray-100">
                  <Link to={`/blogs/${item._id}`} onClick={() => {
                    setSearchTerm("");
                    setFilteredResults([]);
                  }}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Right Side Controls */}
        <div className="hidden md:flex items-center gap-4">
          <select
            value={i18n.language}
            onChange={(e) => i18n.changeLanguage(e.target.value)}
            className="border px-2 py-1 rounded"
          >
            <option value="en">English</option>
            <option value="bn">বাংলা</option>
            <option value="hi">Hindi</option>
          </select>
          <Link to="/donate" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            {t("donate")}
          </Link>
          {isLoggedIn ? (
            <button
              onClick={() => {
                localStorage.removeItem("token");
                setIsLoggedIn(false);
                navigate("/");
              }}
              className="text-red-600 hover:underline"
            >
              {t("logout")}
            </button>


          ) : (
            <>
              <Link to="/login" className="text-blue-600 hover:underline">
                {t("login")}
              </Link>
            </>
          )}

        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <input
            type="text"
            placeholder={t("search_placeholder")}
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full px-4 py-2 border rounded-md"
          />
          {filteredResults.length > 0 && (
            <ul className="bg-white border w-full mt-1 rounded shadow-md max-h-60 overflow-y-auto">
              {filteredResults.map((item) => (
                <li key={item._id} className="px-4 py-2 hover:bg-gray-100">
                  <Link to={`/blogs/${item._id}`} onClick={() => {
                    setSearchTerm("");
                    setFilteredResults([]);
                    setIsOpen(false);
                  }}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
          <select
            value={i18n.language}
            onChange={(e) => i18n.changeLanguage(e.target.value)}
            className="w-full border px-2 py-1 rounded"
          >
            <option value="en">English</option>
            <option value="bn">বাংলা</option>
            <option value="hi">Hindi</option>
          </select>
          <Link to="/donate" className="block bg-blue-600 text-white px-4 py-2 rounded text-center hover:bg-blue-700">
            {t("donate")}
          </Link>
          {isLoggedIn ? (
            <button
              onClick={() => {
                localStorage.removeItem("token");
                setIsLoggedIn(false);
                setIsOpen(false);
                navigate("/");
              }}
              className="w-full text-red-600 text-center"
            >
              {t("logout")}
            </button>


          ) : (
            <>
              <Link to="/login" className="block text-blue-600 text-center">
                {t("login")}
              </Link>

            </>
          )}

        </div>
      )}

      {/* Category Navigation */}
      <nav>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-4 overflow-x-auto py-2 text-md font-medium text-gray-700">
            <Link to="/" className="hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              {t("home")}
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat.id}
                to={`/${cat.rout}`}
                className="hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                {t(`category.${cat.name}`)}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
