
import React from "react";


const Header1 = () => {
  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-start h-16 space-x-4">
          <img
            src="/Logo-.png"
            alt="School Logo"
            className="h-12 w-auto object-contain"
          />
          <h1 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 leading-tight">
            Quick Tech Institute{' '}
            <span className="hidden sm:inline">Of Information Technology</span>
          </h1>
        </div>
      </div>
    </nav>
  );
};

export default Header1;
