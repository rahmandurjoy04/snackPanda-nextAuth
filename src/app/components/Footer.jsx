import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-base-100 text-black py-10">
      <div className="max-w-11/12  mx-auto min-w-sm">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
          {/* Left: Logo & copyright */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold mb-1">SnackPanda</h2>
            <p className="text-sm text-black">
              &copy; {currentYear} SnackPanda. All rights reserved.
            </p>
          </div>

          {/* Middle: Navigation */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <Link href="/" className="hover:text-blue-800 transition-colors font-medium">
              Home
            </Link>
            <Link href="/products" className="hover:text-blue-800 transition-colors font-medium">
              Products
            </Link>
            <Link href="/products/add" className="hover:text-blue-800 transition-colors font-medium">
              Add Product
            </Link>
          </div>

          {/* Right: Social Icons */}
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-800 transition-colors">
              <FaFacebookF size={18} />
            </a>
            <a href="#" className="hover:text-blue-800 transition-colors">
              <FaTwitter size={18} />
            </a>
            <a href="#" className="hover:text-blue-800 transition-colors">
              <FaInstagram size={18} />
            </a>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-6 border-t border-blue-500 pt-4 text-center text-black text-sm">
          Made with ❤️ using Next.js & TailwindCSS
        </div>
      </div>
    </footer>
  );
}
