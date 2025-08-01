'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About Me', href: '#about' },
  { label: 'Resume', href: '#resume' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Recommendation', href: '#recommendation' },
  { label: 'Contact', href: '#contact' },
];

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState<string>('#home');
  const [showMobileNav, setShowMobileNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.querySelector('#home');
      const aboutSection = document.querySelector('#about');
      
      if (homeSection && aboutSection) {
        const homeBottom = homeSection.getBoundingClientRect().bottom;
        setShowMobileNav(homeBottom <= 0);
      }

      for (const item of navItems) {
        const section = document.querySelector(item.href);
        if (section) {
          const top = section.getBoundingClientRect().top;
          if (top >= 0 && top < window.innerHeight / 2) {
            setActiveSection(item.href);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Mobile: Horizontal navigation - appears after home section */}
      <nav className={`lg:hidden bg-yellow-400 text-black p-4 fixed top-0 left-0 right-0 z-40 shadow-md transition-transform duration-300 ${
        showMobileNav ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/images/olenaCROP.JPG"
              alt="Olena Holub"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="font-bold text-sm">OLENA HOLUB</span>
          </div>
          
          {/* Mobile nav dots */}
          <div className="flex gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`w-2 h-2 rounded-full transition-colors ${
                  activeSection === item.href ? 'bg-white' : 'bg-black/30'
                }`}
                title={item.label}
              />
            ))}
          </div>
        </div>
      </nav>

      {/* Desktop: Vertical sidebar */}
      <aside className="hidden lg:flex w-60 bg-yellow-400 text-black min-h-screen flex-col items-center sticky top-0">
        {/* Avatar */}
        <div className="p-6">
          <Image
            src="/images/olenaCROP.JPG"
            alt="Olena Holub"
            width={120}
            height={120}
            className="rounded-full shadow-lg"
          />
        </div>

        {/* Navigation centered vertically */}
        <div className="flex-1 flex flex-col justify-center items-center text-sm font-semibold">
          {/* Top dot */}
          <div className="w-3 h-3 bg-black rounded-full mb-0.5" />
          
          {navItems.map((item) => (
            <div key={item.href} className="flex flex-col items-center">
              <div className="w-px h-5 bg-black" />
              <a
                href={item.href}
                className={`py-1 px-2 transition text-lg hover:scale-105 ${
                  activeSection === item.href ? 'text-white font-bold' : 'text-black hover:text-white'
                }`}
              >
                {item.label}
              </a>
            </div>
          ))}
          
          {/* Bottom line and dot */}
          <div className="w-px h-5 bg-black mt-1" />
          <div className="w-3 h-3 bg-black rounded-full mt-0.5" />
        </div>

        {/* Language switch */}
        <div className="pb-6 text-sm">
          <a href="/" lang="en" className="hover:text-white transition">EN</a>
          <span className="mx-2">/</span>
          <a href="/" lang="es" className="hover:text-white transition">ES</a>
        </div>
      </aside>
    </>
  );
}