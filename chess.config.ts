import type { IType, IValue } from './chess.types';
import { FILE } from './games.enum';

const WHITE = true;
const BLACK = false;

const Config = {
  WHITE,
  BLACK,

  PAWN_VALUE: 1 as IValue,
  PAWN_TYPE: 0 as IType,

  KNIGHT_VALUE: 3 as IValue,
  KNIGHT_TYPE: 1 as IType,

  BISHOP_VALUE: 3 as IValue,
  BISHOP_TYPE: 2 as IType,

  ROOK_VALUE: 5 as IValue,
  ROOK_TYPE: 3 as IType,

  QUEEN_VALUE: 9 as IValue,
  QUEEN_TYPE: 4 as IType,

  KING_VALUE: 10000 as IValue,
  KING_TYPE: 5 as IType,

  tileSize: 50,
  SQUARE_SIZE: 8,

  initialPosition: [
    [
      { color: WHITE, piece: 3 as IType },
      { color: WHITE, piece: 1 as IType },
      { color: WHITE, piece: 2 as IType },
      { color: WHITE, piece: 4 as IType },
      { color: WHITE, piece: 5 as IType },
      { color: WHITE, piece: 2 as IType },
      { color: WHITE, piece: 1 as IType },
      { color: WHITE, piece: 3 as IType },
    ],
    [
      { color: WHITE, piece: 0 as IType },
      { color: WHITE, piece: 0 as IType },
      { color: WHITE, piece: 0 as IType },
      { color: WHITE, piece: 0 as IType },
      { color: WHITE, piece: 0 as IType },
      { color: WHITE, piece: 0 as IType },
      { color: WHITE, piece: 0 as IType },
      { color: WHITE, piece: 0 as IType },
    ],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [
      { color: BLACK, piece: 0 as IType },
      { color: BLACK, piece: 0 as IType },
      { color: BLACK, piece: 0 as IType },
      { color: BLACK, piece: 0 as IType },
      { color: BLACK, piece: 0 as IType },
      { color: BLACK, piece: 0 as IType },
      { color: BLACK, piece: 0 as IType },
      { color: BLACK, piece: 0 as IType },
    ],
    [
      { color: BLACK, piece: 3 as IType },
      { color: BLACK, piece: 1 as IType },
      { color: BLACK, piece: 2 as IType },
      { color: BLACK, piece: 4 as IType },
      { color: BLACK, piece: 5 as IType },
      { color: BLACK, piece: 2 as IType },
      { color: BLACK, piece: 1 as IType },
      { color: BLACK, piece: 3 as IType },
    ],
  ],

  random: [
    [
      { color: WHITE, piece: 2 as IType },
      { color: BLACK, piece: 5 as IType },
      { color: WHITE, piece: 3 as IType },
      { color: BLACK, piece: 1 as IType },
      { color: WHITE, piece: 0 as IType },
      { color: BLACK, piece: 4 as IType },
      { color: WHITE, piece: 1 as IType },
      { color: BLACK, piece: 3 as IType },
    ],
    [
      { color: BLACK, piece: 2 as IType },
      { color: WHITE, piece: 0 as IType },
      { color: BLACK, piece: 1 as IType },
      { color: WHITE, piece: 5 as IType },
      { color: BLACK, piece: 0 as IType },
      { color: WHITE, piece: 3 as IType },
      { color: BLACK, piece: 2 as IType },
      { color: WHITE, piece: 4 as IType },
    ],
    [
      null,
      { color: WHITE, piece: 2 as IType },
      null,
      { color: BLACK, piece: 1 as IType },
      null,
      { color: WHITE, piece: 0 as IType },
      null,
      { color: BLACK, piece: 5 as IType },
    ],
    [
      { color: BLACK, piece: 4 as IType },
      null,
      { color: WHITE, piece: 3 as IType },
      null,
      { color: BLACK, piece: 2 as IType },
      null,
      { color: WHITE, piece: 1 as IType },
      null,
    ],
    [
      null,
      { color: BLACK, piece: 3 as IType },
      null,
      { color: WHITE, piece: 4 as IType },
      null,
      { color: BLACK, piece: 0 as IType },
      null,
      { color: WHITE, piece: 5 as IType },
    ],
    [
      { color: WHITE, piece: 1 as IType },
      null,
      { color: BLACK, piece: 2 as IType },
      null,
      { color: WHITE, piece: 0 as IType },
      null,
      { color: BLACK, piece: 3 as IType },
      null,
    ],
    [
      { color: BLACK, piece: 5 as IType },
      { color: WHITE, piece: 3 as IType },
      { color: BLACK, piece: 1 as IType },
      { color: WHITE, piece: 2 as IType },
      { color: BLACK, piece: 4 as IType },
      { color: WHITE, piece: 0 as IType },
      { color: BLACK, piece: 2 as IType },
      { color: WHITE, piece: 1 as IType },
    ],
    [
      { color: WHITE, piece: 5 as IType },
      { color: BLACK, piece: 4 as IType },
      { color: WHITE, piece: 3 as IType },
      { color: BLACK, piece: 0 as IType },
      { color: WHITE, piece: 2 as IType },
      { color: BLACK, piece: 1 as IType },
      { color: WHITE, piece: 4 as IType },
      { color: BLACK, piece: 5 as IType },
    ],
  ],
  empty: [
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],

    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
  ],

  fileToIndex: function (file: FILE) {
    const fileMap = {
      a: 0,
      b: 1,
      c: 2,
      d: 3,
      e: 4,
      f: 5,
      g: 6,
      h: 7,
    };
    return fileMap[file];
  },
  indexToFile: function (file: number) {
    const files = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    return files[file];
  },
};

export default Config;
