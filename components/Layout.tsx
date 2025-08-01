import Sidebar from './Sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col lg:flex-row">
      <Sidebar />
      <main className="flex-1 p-4 sm:p-6 lg:p-10 bg-white min-h-screen">
        {children}
      </main>
    </div>
  );
}