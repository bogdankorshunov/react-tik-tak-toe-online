import srcAvatar from "@/public/images/avatar.jpg";

export const GAME_SYMBOL = {
  CROSS: "cross",
  ZERO: "zero",
  TRIANGLE: "triangle",
  SQUARE: "square",
};

export const GAME_SYMBOL_ORDER = [
  GAME_SYMBOL.CROSS,
  GAME_SYMBOL.ZERO,
  GAME_SYMBOL.TRIANGLE,
  GAME_SYMBOL.SQUARE,
];

export const PLAYERS = [
  {
    id: "1",
    name: "Brad Pitt 1",
    rating: "4",
    symbol: GAME_SYMBOL.CROSS,
    avatar: srcAvatar,
  },
  {
    id: "2",
    name: "Brad Pitt 2",
    rating: "44",
    symbol: GAME_SYMBOL.ZERO,
    avatar: srcAvatar,
  },
  {
    id: "3",
    name: "Brad Pitt 3",
    rating: "444",
    symbol: GAME_SYMBOL.TRIANGLE,
    avatar: srcAvatar,
  },
  {
    id: "4",
    name: "Brad Pitt 4",
    rating: "4444",
    symbol: GAME_SYMBOL.SQUARE,
    avatar: srcAvatar,
  },
];
