import { FILE } from "./games.enum";

export type IPosition = -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;
export type IType = -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6;
export type IValue = -1 | 0 | 1 | 3 | 5 | 9 | 10000;

export interface IPiece {
  color: boolean;
  piece: IType;
  r?: IPosition;
  f?: FILE;
}

export type IBoard = Array<Array<IPiece | null>>;
