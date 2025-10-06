import { FILE } from './games.enum';
import { IBoard, IType } from './chess.types';

export const COLOR = { WHITE: true, BLACK: false } as const;
export const PIECE = {
  PAWN: { type: 0, value: 1 },
  KNIGHT: { type: 1, value: 3 },
  BISHOP: { type: 2, value: 3 },
  ROOK: { type: 3, value: 5 },
  QUEEN: { type: 4, value: 9 },
  KING: { type: 5, value: 10000 },
} as const;

export const BOARD = {
  SIZE: 8,
  TILE_PX: 50,
  EMPTY: Array(8).fill(Array(8).fill(false)),
};

export const FILES = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'] as const;

export const fileToIndex = (file: FILE) => FILES.indexOf(file);
export const indexToFile = (i: number) => FILES[i];

const Config = {
  PIECE,
  COLOR,
  BOARD,
  INITIAL_POS: createInitialPosition(),
};

function createInitialPosition(): IBoard {
  return [
    [
      { color: COLOR.WHITE, piece: 3 as IType },
      { color: COLOR.WHITE, piece: 1 as IType },
      { color: COLOR.WHITE, piece: 2 as IType },
      { color: COLOR.WHITE, piece: 4 as IType },
      { color: COLOR.WHITE, piece: 5 as IType },
      { color: COLOR.WHITE, piece: 2 as IType },
      { color: COLOR.WHITE, piece: 1 as IType },
      { color: COLOR.WHITE, piece: 3 as IType },
    ],
    [
      { color: COLOR.WHITE, piece: 0 as IType },
      { color: COLOR.WHITE, piece: 0 as IType },
      { color: COLOR.WHITE, piece: 0 as IType },
      { color: COLOR.WHITE, piece: 0 as IType },
      { color: COLOR.WHITE, piece: 0 as IType },
      { color: COLOR.WHITE, piece: 0 as IType },
      { color: COLOR.WHITE, piece: 0 as IType },
      { color: COLOR.WHITE, piece: 0 as IType },
    ],
    ...Array(4).fill(Array(8).fill(null)),
    [
      { color: COLOR.BLACK, piece: 5 as IType },
      { color: COLOR.WHITE, piece: 3 as IType },
      { color: COLOR.BLACK, piece: 1 as IType },
      { color: COLOR.WHITE, piece: 2 as IType },
      { color: COLOR.BLACK, piece: 4 as IType },
      { color: COLOR.WHITE, piece: 0 as IType },
      { color: COLOR.BLACK, piece: 2 as IType },
      { color: COLOR.WHITE, piece: 1 as IType },
    ],
    [
      { color: COLOR.WHITE, piece: 5 as IType },
      { color: COLOR.BLACK, piece: 4 as IType },
      { color: COLOR.WHITE, piece: 3 as IType },
      { color: COLOR.BLACK, piece: 0 as IType },
      { color: COLOR.WHITE, piece: 2 as IType },
      { color: COLOR.BLACK, piece: 1 as IType },
      { color: COLOR.WHITE, piece: 4 as IType },
      { color: COLOR.BLACK, piece: 5 as IType },
    ],
  ];
}

export default Config;
