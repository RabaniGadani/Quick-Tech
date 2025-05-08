'use client';

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/client";

// Logout Button Component
const LogoutButton: React.FC = () => {
  const router = useRouter();

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/auth/login");
  };

  return (
    <button
      onClick={handleLogout}
      className="hover:underline text-white"
    >
      Logout
    </button>
  );
};

export const Header: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <>
      {/* Top Header */}
      <header className="bg-teal-900 text-white p-4 flex justify-between items-center z-10 relative">
        {/* Logo */}
        <div className="logo flex items-center">
          <img
            src="/Logo-.png"
            alt="Quick Tech Logo"
            className="h-12 object-contain mr-4"
          />
          <h1 className="text-base sm:text-lg md:text-xl font-bold">
            Quick Tech Institute{" "}
            <span className="hidden sm:inline">Of Information Technology</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          <Link href="/main" className="hover:underline">Home</Link>
          <Link href="/main/courses" className="hover:underline">Courses</Link>
          <Link href="/main/admission" className="hover:underline">Admissions</Link>
          <Link href="/main/contact" className="hover:underline">Contact</Link>
          <Link href="/main/FAQ" className="hover:underline">FAQ</Link>
          <LogoutButton />
        </nav>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden cursor-pointer" onClick={toggleSidebar}>
          <div className="w-6 h-0.5 bg-white mb-1" />
          <div className="w-6 h-0.5 bg-white mb-1" />
          <div className="w-6 h-0.5 bg-white" />
        </div>
      </header>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed top-0 right-0 h-full bg-teal-700 text-white transition-all duration-300 z-20 ${isSidebarOpen ? 'w-64' : 'w-0'} overflow-x-hidden`}
      >
        <span
          className="absolute top-4 left-4 text-2xl cursor-pointer"
          onClick={toggleSidebar}
        >
          ×
        </span>

        <div className="mt-16 flex flex-col space-y-4 px-6">
          <Link href="/main" onClick={toggleSidebar} className="py-3 hover:bg-yellow-300 hover:text-teal-700 rounded">Home</Link>
          <Link href="/main/courses" onClick={toggleSidebar} className="py-3 hover:bg-yellow-300 hover:text-teal-700 rounded">Courses</Link>
          <Link href="/main/admission" onClick={toggleSidebar} className="py-3 hover:bg-yellow-300 hover:text-teal-700 rounded">Admissions</Link>
          <Link href="/main/contact" onClick={toggleSidebar} className="py-3 hover:bg-yellow-300 hover:text-teal-700 rounded">Contact</Link>
          <Link href="/main/FAQ" onClick={toggleSidebar} className="py-3 hover:bg-yellow-300 hover:text-teal-700 rounded">FAQ</Link>
          
          {/* Logout Button in Sidebar */}
          <div className="py-3">
            <LogoutButton />
          </div>
        </div>
      </div>
    </>
  );
};
