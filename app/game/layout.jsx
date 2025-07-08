import { Header } from "@/components/layout/Header";

export default function GameLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 pb-4">
      <Header />
      {children}
    </div>
  );
}
