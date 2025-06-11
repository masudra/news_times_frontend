import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h3 className="text-xl font-semibold mb-4">About Us</h3>
          <p className="text-gray-400 text-sm">
            Welcome to our blog! We share updates and stories on various topics.
            Stay connected and inspired.
          </p>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Categories</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <Link to="/category/technology" className="hover:underline">
                Technology
              </Link>
            </li>
            <li>
              <Link to="/category/lifestyle" className="hover:underline">
                Lifestyle
              </Link>
            </li>
            <li>
              <Link to="/category/health" className="hover:underline">
                Health
              </Link>
            </li>
            <li>
              <Link to="/category/business" className="hover:underline">
                Business
              </Link>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/donate" className="hover:underline">
                Donate
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
          <p className="text-gray-400 text-sm mb-2">
            Subscribe for weekly updates.
          </p>
          <form className="lg:flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3  rounded bg-gray-800 text-white text-sm focus:outline-none"
            />
            <button
              type="submit"
              className="sm:mt-2 md:mt-2 lg:mt-0 w-full sm:w-auto px-4 py-2 bg-blue-600 hover:bg-blue-700 text-sm font-semibold rounded"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-800 text-center text-gray-500 py-4 text-sm">
        © {new Date().getFullYear()} My Blog. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
