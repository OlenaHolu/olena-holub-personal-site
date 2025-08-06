// components/Footer.tsx
'use client';

import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 text-sm mt-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col items-center space-y-4 sm:space-y-2">
        {/* Social Icons */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-800 transition"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-800 transition"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:olenaholub.dev@gmail.com"
            className="hover:text-gray-800 transition"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>

        {/* Footer Text */}
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} Olena Holub. All rights reserved.</p>
          <p className="text-xs text-gray-500 mt-1">
  Designed & developed by Olena Holub
</p>

        </div>
      </div>
    </footer>
  );
}
