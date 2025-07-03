"use client";
import { useState } from "react";
import { Header } from "../src/components/Header";
import { GameBoard, GameInfo, GameTitle } from "../src/components/tik-tak";

export default function HomePage() {
  const [playersCount, setPlayersCount] = useState(4);
  return (
    <div className="min-h-screen bg-gray-50 pb-4">
      <Header />
      <div className="container mx-auto max-w-2xl px-4">
        <GameTitle className="mt-20 mb-10" playersCount={playersCount} />
        <GameInfo className="mb-4" playersCount={playersCount} />
        <GameBoard playersCount={playersCount} />
      </div>
    </div>
  );
}
