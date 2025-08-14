'use client';

import {
  Home,
  User,
  Briefcase,
  LayoutGrid,
  MessageCircle,
  Send
} from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import useTranslation from 'next-translate/useTranslation';

export default function SideIcons() {
  const { t } = useTranslation('common');

  const navItems = [
    { icon: Home, label: t('navigation.home'), href: '#home' },
    { icon: User, label: t('navigation.about'), href: '#about' },
    { icon: Briefcase, label: t('navigation.resume'), href: '#resume' },
    { icon: LayoutGrid, label: t('navigation.portfolio'), href: '#portfolio' },
    { icon: MessageCircle, label: t('navigation.recommendation'), href: '#recommendation' },
    { icon: Send, label: t('navigation.contact'), href: '#contact' }
  ];

  return (
    <>
      {/* Mobile: Bottom fixed navigation with Language dropdown */}
      <div className="lg:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-2 bg-yellow-400 px-2 py-2 rounded-full shadow-lg">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                title={item.label}
                className="p-2 rounded-full hover:bg-yellow-500 transition active:scale-95"
              >
                <Icon size={18} className="text-black" />
              </a>
            );
          })}
          {/* Language dropdown */}
          <LanguageSwitcher mode="icon" dropdownUp />
        </div>
      </div>

      {/* Desktop: Right side vertical icons + full language switcher */}
      <div className="hidden lg:flex flex-col items-center gap-4 fixed right-4 top-1/2 -translate-y-1/2 z-50">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.label}
              href={item.href}
              title={item.label}
              className="bg-yellow-400 text-black p-3 rounded-full shadow-md hover:scale-110 hover:bg-yellow-500 transition flex items-center justify-center"
            >
              <Icon size={20} className="text-black" />
            </a>
          );
        })}
        <div className="bg-yellow-400 p-2.5 rounded-full shadow-md hover:scale-110 hover:bg-yellow-500 transition">
          <LanguageSwitcher mode="full" />
        </div>
      </div>
    </>
  );
}
