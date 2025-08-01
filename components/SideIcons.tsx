import {
  Home,
  User,
  Briefcase,
  LayoutGrid,
  MessageCircle,
  Send,
} from 'lucide-react';

const navItems = [
  { icon: Home, label: 'Home', href: '#home' },
  { icon: User, label: 'About', href: '#about' },
  { icon: Briefcase, label: 'Resume', href: '#resume' },
  { icon: LayoutGrid, label: 'Portfolio', href: '#portfolio' },
  { icon: MessageCircle, label: 'Recommendation', href: '#recommendation' },
  { icon: Send, label: 'Contact', href: '#contact' },
];

export default function SideIcons() {
  return (
    <>
      {/* Mobile: Bottom fixed navigation */}
      <div className="lg:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
        <div className="flex gap-2 bg-yellow-400 p-2 rounded-full shadow-lg">
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
        </div>
      </div>

      {/* Desktop: Right side vertical icons */}
      <div className="hidden lg:block fixed right-4 top-1/2 -translate-y-1/2 space-y-4 z-50">
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
      </div>
    </>
  );
}