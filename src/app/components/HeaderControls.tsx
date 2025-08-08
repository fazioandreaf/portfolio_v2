"use client";

import { Moon, Sun, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';
import { useClientState } from '../hooks/useClientState';
import { useState } from 'react';

export default function HeaderControls() {
  const { language, changeLanguage, mounted } = useLanguage();
  const { theme, toggleTheme } = useClientState();
  const [isMenuOpen, setMenuOpen] = useState(false);

  if (!mounted) {
    return (
      <>
        {/* Desktop Controls */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Language Toggle */}
          <div className="flex gap-2">
            <button
              className="px-3 py-2 rounded-lg font-medium transition-colors duration-300 bg-divider text-secondary-text hover:text-primary"
            >
              IT
            </button>
            <button
              className="px-3 py-2 rounded-lg font-medium transition-colors duration-300 bg-primary text-black"
            >
              EN
            </button>
          </div>

          {/* Theme Toggle */}
          <button
            className="p-2 rounded-lg bg-divider hover:bg-primary hover:text-black transition-all duration-300"
            aria-label="Toggle theme"
          >
            <Sun className="w-5 h-5 text-primary" />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            className="p-2 rounded-lg bg-divider hover:bg-primary hover:text-black transition-all duration-300"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5 text-primary" />
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      {/* Desktop Controls */}
      <div className="hidden md:flex items-center space-x-4">
        {/* Language Toggle */}
        <div className="flex gap-2">
          <button
            onClick={() => changeLanguage('it')}
            className={`px-3 py-2 rounded-lg font-medium transition-colors duration-300 ${
              language === 'it'
                ? 'bg-primary text-black'
                : 'bg-divider text-secondary-text hover:text-primary'
            }`}
          >
            IT
          </button>
          <button
            onClick={() => changeLanguage('en')}
            className={`px-3 py-2 rounded-lg font-medium transition-colors duration-300 ${
              language === 'en'
                ? 'bg-primary text-black'
                : 'bg-divider text-secondary-text hover:text-primary'
            }`}
          >
            EN
          </button>
        </div>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-lg bg-divider hover:bg-primary hover:text-black transition-all duration-300"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? (
            <Sun className="w-5 h-5 text-primary" />
          ) : (
            <Moon className="w-5 h-5 text-primary" />
          )}
        </button>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden relative">
        <button
          onClick={() => setMenuOpen(!isMenuOpen)}
          className="p-2 rounded-lg bg-divider hover:bg-primary hover:text-black transition-all duration-300"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <X className="w-5 h-5 text-primary" />
          ) : (
            <Menu className="w-5 h-5 text-primary" />
          )}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="fixed top-16 right-2 sm:right-4 mt-2 w-60 sm:w-64 border border-divider bg-background shadow-lg rounded-lg z-[110] max-h-[calc(100vh-5rem)] overflow-y-auto">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                href="/" 
                className="block px-3 py-2 text-secondary-text hover:text-primary transition-colors duration-300 rounded"
                onClick={() => setMenuOpen(false)}
              >
                {language === 'it' ? 'Home' : 'Home'}
              </Link>
              <Link 
                href="/about" 
                className="block px-3 py-2 text-secondary-text hover:text-primary transition-colors duration-300 rounded"
                onClick={() => setMenuOpen(false)}
              >
                {language === 'it' ? 'Chi Sono' : 'About'}
              </Link>
              
              {/* Mobile Controls */}
              <div className="flex items-center justify-between px-3 py-2 border-t border-divider mt-2">
                <div className="flex gap-2">
                  <button
                    onClick={() => changeLanguage('it')}
                    className={`px-3 py-2 rounded-lg font-medium transition-colors duration-300 ${
                      language === 'it'
                        ? 'bg-primary text-black'
                        : 'bg-divider text-secondary-text hover:text-primary'
                    }`}
                  >
                    IT
                  </button>
                  <button
                    onClick={() => changeLanguage('en')}
                    className={`px-3 py-2 rounded-lg font-medium transition-colors duration-300 ${
                      language === 'en'
                        ? 'bg-primary text-black'
                        : 'bg-divider text-secondary-text hover:text-primary'
                    }`}
                  >
                    EN
                  </button>
                </div>

                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg bg-divider hover:bg-primary hover:text-black transition-all duration-300"
                >
                  {theme === 'dark' ? (
                    <Sun className="w-5 h-5 text-primary" />
                  ) : (
                    <Moon className="w-5 h-5 text-primary" />
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
