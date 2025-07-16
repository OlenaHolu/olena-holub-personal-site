import Link from 'next/link';
import Image from 'next/image';

export default function Sidebar() {
  return (
    <aside className="w-48 bg-yellow-400 text-black min-h-screen p-4 flex flex-col items-center">
      <Image
        src="/images/olena.jpg"
        alt="Olena Holub"
        width={80}
        height={80}
        className="rounded-full mb-4"
      />
      <nav className="flex flex-col space-y-4 text-sm font-semibold">
        <Link href="/">Home</Link>
        <Link href="/about">About Me</Link>
        <Link href="/resume">Resume</Link>
        <Link href="/portfolio">Portfolio</Link>
        <Link href="/testimonials">Testimonials</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <div className="mt-auto pt-6 text-sm">
        <Link href="/" locale="en">EN</Link> / <Link href="/" locale="es">ES</Link>
      </div>
    </aside>
  );
}
