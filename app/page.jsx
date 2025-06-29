"use client";
import { Header } from "../src/components/Header";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto max-w-2xl px-4">
        <GameTitle className="mt-20 mb-10" />
        <GameInfo className="mb-4" />
        <GameBoard />
      </div>
    </div>
  );
}
