import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-4 backdrop-blur-lg bg-black">
      <ul className="flex justify-center space-x-6">
        {/* Home Link */}
        <li>
          <a
            href="https://geanmaidana.com"
            className="text-white relative px-3 py-1 transition-colors duration-300 hover:text-orange-500"
          >
            Back to Personal Website
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-orange-500 to-purple-500 transition-transform duration-300 scale-x-100"></span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
