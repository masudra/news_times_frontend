import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* About Us */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-white">About Us</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Welcome to our blog! We share the latest updates and stories across various categories. Stay connected and inspired with us.
          </p>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-white">Categories</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <Link to="/category/technology" className="hover:text-blue-400 transition-colors duration-200">
                Technology
              </Link>
            </li>
            <li>
              <Link to="/category/lifestyle" className="hover:text-blue-400 transition-colors duration-200">
                Lifestyle
              </Link>
            </li>
            <li>
              <Link to="/category/health" className="hover:text-blue-400 transition-colors duration-200">
                Health
              </Link>
            </li>
            <li>
              <Link to="/category/business" className="hover:text-blue-400 transition-colors duration-200">
                Business
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <Link to="/" className="hover:text-blue-400 transition-colors duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link to="/donate" className="hover:text-blue-400 transition-colors duration-200">
                Donate
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-400 transition-colors duration-200">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-400 transition-colors duration-200">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-white">Newsletter</h3>
          <p className="text-gray-400 text-sm mb-3">
            Subscribe to get weekly updates directly to your inbox.
          </p>
          <form className="lg:flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded bg-gray-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-4 py-2 lg:mt-0 mt-2 bg-blue-600 hover:bg-blue-700 transition duration-200 text-white text-sm font-medium rounded"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-800 text-center text-gray-500 py-5 text-sm">
        © {new Date().getFullYear()} My Blog. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
