interface PieceGame {
  userId: number;
  pieces: number;
}
interface UsernameMichiGame {
  username: string;
  id: number;
}

interface TableGame {
  id: number;
  userId: number;
  piece: number;
}
export interface MichiGameBasic {
  id?: number | string;
}

export interface MichiGameStart extends MichiGameBasic {
  hostId: number;
  gameName: string;
}

export interface MichiGamePlay extends MichiGameStart {
  pieces: [PieceGame, PieceGame];
  game: [
    TableGame,
    TableGame,
    TableGame,
    TableGame,
    TableGame,
    TableGame,
    TableGame,
    TableGame,
    TableGame
  ];
}
export interface MichiGameSave extends MichiGamePlay {
  users: [number, number];
  winId: number;
}

export interface MichiGameI extends MichiGameSave {}
export interface MichiGameUsernames extends MichiGamePlay {
  users: [UsernameMichiGame, UsernameMichiGame];
  winId: number;
}

export interface MichiGame extends MichiGameSave {}
