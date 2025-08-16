"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const currentPath = usePathname();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme === "dark" || (savedTheme === null && prefersDark)) {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const options = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/projects", label: "Projects" },
    { path: "/uses", label: "Uses" },
  ];

  return (
    <html lang="en">
      <body className={`${roboto.className} bg-slate-50 text-gray-900 dark:bg-gray-900 dark:text-white`}>
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className={`fixed top-6 right-6 z-50 p-3 rounded-full shadow-lg transition-all duration-300 ${
            isDarkMode
              ? "bg-gray-800 hover:bg-gray-700 text-yellow-400 shadow-gray-900/50"
              : "bg-white hover:bg-slate-50 text-slate-600 shadow-gray-200"
          }`}
          aria-label="Toggle theme"
        >
          {isDarkMode ? (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          )}
        </button>

        {/* Navbar */}
        <nav
          data-testid="nav"
          className="navbar shadow-md rounded-full mx-auto mt-6 max-w-md p-4 bg-white dark:bg-gray-800"
        >
          <ul data-testid="ul" className="flex justify-center space-x-8">
            {options.map((option) => {
              const isActive = option.path === currentPath;
              return (
                <li data-testid={`li-${option.label}`} key={option.path}>
                  <a
                    data-testid={`a-${option.label}`}
                    className={`link font-medium transition-colors duration-200 ${
                      isActive
                        ? "text-teal-500 border-b-2 border-teal-500 pb-1"
                        : "text-gray-700 hover:text-teal-500 dark:text-gray-300 dark:hover:text-teal-400"
                    }`}
                    href={option.path}
                  >
                    {option.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <main>{children}</main>

        {/* Footer */}
        <footer className="py-6 text-sm mt-12 border-t border-gray-200 text-gray-500 dark:border-gray-700 dark:text-gray-400">
          <div className="container mx-auto px-4 max-w-7xl flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              {options.map((option) => (
                <a key={option.path} href={option.path} className="hover:text-teal-500 transition">
                  {option.label}
                </a>
              ))}
            </div>
            <div className="text-right md:ml-auto">© {new Date().getFullYear()} John Doe. All rights reserved.</div>
          </div>
        </footer>
      </body>
    </html>
  );
}