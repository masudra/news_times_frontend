import { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { BlogContext } from "../../context/BlogContext";
import { Languages } from "lucide-react";

function Footer() {
  const { t } = useTranslation();
  const { blogs, loading } = useContext(BlogContext);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const uniqueCategories = [...new Set(blogs.map(item => item.category?.toLowerCase()))];
    setCategories(uniqueCategories);
  }, [blogs, Languages]);




  return (
    <footer className="bg-gray-900 text-white mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* About Us */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-white">{t("aboutUs")}</h3>
          <p className="text-gray-400 text-sm leading-relaxed">{t("aboutUsText")}
          </p>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-white">{t("categories")}</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              {categories.slice(0, 4).map((cat, i) => (
                <Link key={i} to={`/${cat}`} className=" mt-2 block hover:text-blue-400 transition-colors duration-200">
                  {t(cat) || cat}
                </Link>
              ))}
            </li>

          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-white">{t("quickLinks")}</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <Link to="/" className="hover:text-blue-400 transition-colors duration-200">
                {t("home")}
              </Link>
            </li>
            <li>
              <Link to="/donate" className="hover:text-blue-400 transition-colors duration-200">
                {t("donate")}
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-400 transition-colors duration-200">
                {t("aboutUs")}              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-400 transition-colors duration-200">
                {t("contact")}              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-white">{t("newsletter")}</h3>

          <form className="lg:flex gap-2">
            <input
              type="email"
              placeholder={t("enterYourEmail")}
              className="w-full px-4 py-2 rounded bg-gray-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              type="submit"
              className="px-4 py-2 lg:mt-0 mt-2 bg-red-600 hover:bg-red-700 transition duration-200 text-white text-sm font-medium rounded"
            >
              {t("subscribe")}
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-800 text-center text-gray-500 py-5 text-sm">
        © {new Date().getFullYear()}{t("copyright")}
      </div>
    </footer>
  );
}

export default Footer;
