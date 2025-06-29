"use client";
import { Header } from "../src/components/Header";
import { GameInfo } from "../src/components/tik-tak/game-info";
import { GameTitle } from "../src/components/tik-tak/game-title";
import { TikTakCell } from "../src/components/tik-tak/tik-tak-cell";
import { TikTakInfo } from "../src/components/tik-tak/tik-tak-info";
import { useTikTak } from "../src/hooks/useTikTak";

export default function HomePage() {
  const {
    cells,
    currentStep,
    handleClick,
    isDraw,
    resetGame,
    winnerSequence,
    winnerSymbol,
  } = useTikTak();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container max-w-2xl mx-auto px-4">
        <GameTitle className="mt-20 mb-10" />
        <GameInfo />
      </div>
    </div>
    // <div className="min-h-screen bg-slate-500 flex items-center justify-center">
    //   <div className="bg-slate-200 p-8 rounded-lg shadow-lg">
    //     <h1 className="text-4xl font-bold mb-4">Tik-Tak-Game</h1>
    //     <TikTakInfo
    //       winnerSymbol={winnerSymbol}
    //       currentStep={currentStep}
    //       isDraw={isDraw}
    //     />
    //     <div className="flex flex-col items-center">
    //       <div className="grid grid-cols-3 gap-2 w-48 h-48 mb-4">
    //         {cells.map((symbol, index) => (
    //           <TikTakCell
    //             key={index}
    //             symbol={symbol}
    //             isWinner={winnerSequence.includes(index)}
    //             onClick={() => handleClick(index)}
    //           />
    //         ))}
    //       </div>
    //       <button
    //         className="px-4 py-2 bg-amber-100 text-amber-600 border-amber-300 border rounded-xl hover:bg-amber-200"
    //         onClick={() => resetGame()}
    //       >
    //         Reset
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
}
