import { FILE } from "./games.enum";
import { IBoard, IPiece, IType } from "./chess.types";
import { Piece } from "./pieces";

export const COLOR = { WHITE: true, BLACK: false } as const;
export const PIECE = {
  EMPTY: { type: 0, value: 0 },
  PAWN: { type: 1, value: 1 },
  KNIGHT: { type: 2, value: 3 },
  BISHOP: { type: 3, value: 3 },
  ROOK: { type: 4, value: 5 },
  QUEEN: { type: 5, value: 9 },
  KING: { type: 6, value: 10000 },
  INVALID: { type: -1, value: -1 },
} as const;

export const BOARD = {
  SIZE: 8,
  TILE_PX: 50,
  EMPTY: Array(8).fill(Array(8).fill(false)),
};

export const FILES = Object.values(FILE);

const Config = {
  PIECE,
  COLOR,
  BOARD,
  INITIAL_POS: createInitialPosition(),
  fileToIndex: (file: FILE) => FILES.indexOf(file),
  indexToFile: (i: number) => FILES[i] satisfies FILE,
};

function createInitialPosition(): IBoard {
  return [
    [
      { color: COLOR.WHITE, piece: PIECE.ROOK.type satisfies IType },
      { color: COLOR.WHITE, piece: PIECE.KNIGHT.type satisfies IType },
      { color: COLOR.WHITE, piece: PIECE.BISHOP.type satisfies IType },
      { color: COLOR.WHITE, piece: PIECE.QUEEN.type satisfies IType },

      { color: COLOR.WHITE, piece: PIECE.KING.type satisfies IType },
      { color: COLOR.WHITE, piece: PIECE.BISHOP.type satisfies IType },
      { color: COLOR.WHITE, piece: PIECE.KNIGHT.type satisfies IType },
      { color: COLOR.WHITE, piece: PIECE.ROOK.type satisfies IType },
    ],
    [
      { color: COLOR.WHITE, piece: PIECE.PAWN.type satisfies IType },
      { color: COLOR.WHITE, piece: PIECE.PAWN.type satisfies IType },
      { color: COLOR.WHITE, piece: PIECE.PAWN.type satisfies IType },
      { color: COLOR.WHITE, piece: PIECE.PAWN.type satisfies IType },
      { color: COLOR.WHITE, piece: PIECE.PAWN.type satisfies IType },
      { color: COLOR.WHITE, piece: PIECE.PAWN.type satisfies IType },
      { color: COLOR.WHITE, piece: PIECE.PAWN.type satisfies IType },
      { color: COLOR.WHITE, piece: PIECE.PAWN.type satisfies IType },
    ],
    ...Array<Array<IPiece | null>>(4).fill(Array<IPiece | null>(8).fill(null)),
    [
      { color: COLOR.BLACK, piece: PIECE.PAWN.type satisfies IType },
      { color: COLOR.BLACK, piece: PIECE.PAWN.type satisfies IType },
      { color: COLOR.BLACK, piece: PIECE.PAWN.type satisfies IType },
      { color: COLOR.BLACK, piece: PIECE.PAWN.type satisfies IType },
      { color: COLOR.BLACK, piece: PIECE.PAWN.type satisfies IType },
      { color: COLOR.BLACK, piece: PIECE.PAWN.type satisfies IType },
      { color: COLOR.BLACK, piece: PIECE.PAWN.type satisfies IType },
      { color: COLOR.BLACK, piece: PIECE.PAWN.type satisfies IType },
    ],
    [
      { color: COLOR.BLACK, piece: PIECE.ROOK.type satisfies IType },
      { color: COLOR.BLACK, piece: PIECE.KNIGHT.type satisfies IType },
      { color: COLOR.BLACK, piece: PIECE.BISHOP.type satisfies IType },
      { color: COLOR.BLACK, piece: PIECE.QUEEN.type satisfies IType },

      { color: COLOR.BLACK, piece: PIECE.KING.type satisfies IType },
      { color: COLOR.BLACK, piece: PIECE.BISHOP.type satisfies IType },
      { color: COLOR.BLACK, piece: PIECE.KNIGHT.type satisfies IType },
      { color: COLOR.BLACK, piece: PIECE.ROOK.type satisfies IType },
    ],
  ] satisfies IBoard;
}

export default Config;
